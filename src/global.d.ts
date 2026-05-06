interface Window {
  gtag: (...args: any[]) => void;
  gtag_report_conversion: (url?: string) => boolean;
  dataLayer: any[];
}
