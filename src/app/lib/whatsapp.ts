/**
 * Generic WhatsApp Rotation Utility
 *
 * Usage:
 *   import { getWhatsAppLink, openWhatsApp } from "@/lib/whatsapp";
 *
 *   // With a custom config:
 *   const link = getWhatsAppLink({
 *     numbers: ["447445609826", "447367065477"],
 *     message: "Hello, I'd like to inquire about your services",
 *   });
 *
 *   // Or open directly:
 *   openWhatsApp({
 *     numbers: ["447445609826", "447367065477"],
 *     message: "Hello!",
 *   });
 */

export interface WhatsAppConfig {
  /** E.164-style phone numbers without the leading '+' */
  numbers: string[];
  /** Plain text message (will be URI-encoded automatically) */
  message: string;
  /**
   * Optional namespace for localStorage — use different keys if you have
   * multiple WhatsApp buttons on the same site with different number pools.
   * Defaults to "default".
   */
  namespace?: string;
}

function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function getFingerprint(): string {
  if (typeof window === "undefined") return "ssr";
  const data = [
    navigator.userAgent,
    navigator.language,
    screen.width,
    screen.height,
    screen.colorDepth,
    new Date().getTimezoneOffset(),
    navigator.hardwareConcurrency,
  ].join("|");
  return String(hashString(data));
}

/**
 * Returns a WhatsApp deep-link URL.
 * The same browser/device always gets the same number (sticky via localStorage).
 */
export function getWhatsAppLink(config: WhatsAppConfig): string {
  const { numbers, message, namespace = "default" } = config;

  if (typeof window === "undefined") {
    return buildLink(numbers[0], message);
  }

  const fp = getFingerprint();
  const storageKey = `wa_assigned_${namespace}_${fp}`;

  const saved = localStorage.getItem(storageKey);
  if (saved && numbers.includes(saved)) {
    return buildLink(saved, message);
  }

  const assigned = numbers[hashString(fp) % numbers.length];
  localStorage.setItem(storageKey, assigned);
  return buildLink(assigned, message);
}

function buildLink(phone: string, message: string): string {
  return `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
}

/**
 * Convenience wrapper — builds the link and opens it in a new tab.
 */
export function openWhatsApp(config: WhatsAppConfig): void {
  const w = window as unknown as { dataLayer: object[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event: "whatsapp_lead_click" });
  window.open(getWhatsAppLink(config), "_blank", "noopener,noreferrer");
}

/**
 * Returns the pre-filled WhatsApp message based on the utm_source query param.
 */
export function getUtmMessage(): string {
  if (typeof window === "undefined") {
    return "Hi! I was on your website and interested in setting up online payments solutions. Can you give more info?";
  }
  const params = new URLSearchParams(window.location.search);
  const source = (params.get("utm_source") ?? "").toLowerCase();

  if (source === "google") {
    return "Hi! I came across SwiftNine through Google. Looking for an online payment solution for my business. Can I know more?";
  }
  if (source === "facebook") {
    return "Hey! I came across SwiftNine through Facebook/Instagram. Interested in setting up online payments solutions for my business. Can I know more?";
  }
  return "Hi! I was on your website and interested in setting up online payments solutions. Can you give more info?";
}

/**
 * Opens WhatsApp with number rotation + UTM-based message.
 * Drop-in replacement for openWhatsApp when you want dynamic messages.
 */
export function openWhatsAppWithUtm(
  numbers: string[],
  namespace = "default"
): void {
  openWhatsApp({ numbers, message: getUtmMessage(), namespace });
}
