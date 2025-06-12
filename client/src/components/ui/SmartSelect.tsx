import { useEffect, useRef, useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Option type
export interface SmartSelectOption {
  value: string;
  label: string;
}

// Props type
interface SmartSelectProps {
  options: SmartSelectOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  [key: string]: any;
}

// Hook: Locks to native select if Google Translate is ever detected
export function useGoogleTranslateLock() {
  const [useNative, setUseNative] = useState(false);
  const locked = useRef(false);

  useEffect(() => {
    function checkTranslate() {
      return !!document.querySelector('iframe.goog-te-banner-frame');
    }
    if (checkTranslate()) {
      setUseNative(true);
      locked.current = true;
      return;
    }
    const observer = new MutationObserver(() => {
      if (!locked.current && checkTranslate()) {
        setUseNative(true);
        locked.current = true;
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return useNative;
}

// SmartSelect: Switches to native select if Google Translate is detected
export function SmartSelect({ options, value, onChange, placeholder, ...props }: SmartSelectProps) {
  const useNativeSelect = useGoogleTranslateLock();

  if (useNativeSelect) {
    return (
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        className="block w-full border rounded px-3 py-2 notranslate"
        translate="no"
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    );
  }

  return (
    <Select onValueChange={onChange} defaultValue={value}>
      <SelectTrigger className="notranslate" translate="no">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((opt) => (
          <SelectItem key={opt.value} value={opt.value}>
            {opt.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
} 