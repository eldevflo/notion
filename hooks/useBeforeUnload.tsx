import { useCallback, useEffect } from 'react';

const useBeforeUnload = (enabled: boolean | (() => boolean) | Promise<boolean> = true , message?: string , fn?: ()=>void) => {
  const handler = useCallback(
    async (event: BeforeUnloadEvent) => {
      const finalEnabled = typeof enabled === 'function' ? await enabled() : true;
      if (!finalEnabled) {
        return;
      }

      event.preventDefault();

      if (message) {
        event.returnValue = message;
      }
 

      return message;
    },
    [enabled, message]
  );

  useEffect(() => {
    if (!enabled) {
      return;
    }

    on(window, 'beforeunload', handler);

    return () => off(window, 'beforeunload', handler);
  }, [enabled, handler]);
};

export default useBeforeUnload;

export function on<T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  ...args: Parameters<T['addEventListener']> | [string, Function | null, ...any]
): void {
  if (obj && obj.addEventListener) {
    obj.addEventListener(...(args as Parameters<HTMLElement['addEventListener']>));
  }
}

export function off<T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  ...args: Parameters<T['removeEventListener']> | [string, Function | null, ...any]
): void {
  if (obj && obj.removeEventListener) {
    obj.removeEventListener(...(args as Parameters<HTMLElement['removeEventListener']>));
  }
}