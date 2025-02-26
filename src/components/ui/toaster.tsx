"use client";

import {
  Toaster as ChakraToaster,
  Portal,
  Spinner,
  Stack,
  Toast,
  createToaster,
} from "@chakra-ui/react";

export const toaster = createToaster({
  placement: "bottom-end",
  pauseOnPageIdle: true,
  overlap: true,
});

export const Toaster = ({
  toastRootProps,
  toastIndicatorProps,
  toastTitleProps,
  toastDescriptionProps,
}: {
  toastRootProps?: Toast.RootProps;
  toastIndicatorProps?: Toast.IndicatorProps;
  toastTitleProps?: Toast.TitleProps;
  toastDescriptionProps?: Toast.DescriptionProps;
}) => {
  return (
    <Portal>
      <ChakraToaster insetInline={{ mdDown: "4" }} toaster={toaster}>
        {(toast) => (
          <Toast.Root width={{ md: "sm" }} {...toastRootProps}>
            {toast.type === "loading" ? (
              <Spinner size="sm" color="blue.solid" />
            ) : (
              <Toast.Indicator {...toastIndicatorProps} />
            )}
            <Stack gap="1" flex="1" maxWidth="100%">
              {toast.title && (
                <Toast.Title {...toastTitleProps}>{toast.title}</Toast.Title>
              )}
              {toast.description && (
                <Toast.Description {...toastDescriptionProps}>
                  {toast.description}
                </Toast.Description>
              )}
            </Stack>
            {toast.action && (
              <Toast.ActionTrigger>{toast.action.label}</Toast.ActionTrigger>
            )}
            {toast.meta?.closable && <Toast.CloseTrigger />}
          </Toast.Root>
        )}
      </ChakraToaster>
    </Portal>
  );
};
