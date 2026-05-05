interface Window {
  gtag?: (
    command: 'event' | 'config' | 'js' | 'set',
    targetId: string,
    config?: { [key: string]: any }
  ) => void;
  dataLayer?: any[];
}
