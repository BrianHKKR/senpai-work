// Conversion tracking utilities for GA4 + Meta Pixel

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackRegistration(prefecture: string) {
  // GA4: registration completion
  window.gtag?.("event", "sign_up", {
    method: "form",
    prefecture,
  });

  // Meta Pixel: lead event
  window.fbq?.("track", "Lead", {
    content_name: "senpai_registration",
    content_category: prefecture,
  });
}

export function trackTaskApply(taskId: string, taskTitle: string) {
  // GA4: task application
  window.gtag?.("event", "apply_task", {
    task_id: taskId,
    task_title: taskTitle,
  });

  // Meta Pixel: custom event
  window.fbq?.("trackCustom", "TaskApply", {
    task_id: taskId,
    task_title: taskTitle,
  });
}

export function trackPageView(url: string) {
  window.gtag?.("event", "page_view", {
    page_path: url,
  });

  window.fbq?.("track", "PageView");
}
