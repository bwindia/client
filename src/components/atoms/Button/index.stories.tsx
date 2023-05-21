import { DONATE_BLOOD, GET_BLOOD_NOW, REGISTER_NOW, SIGN_IN } from "src/utils/constants";
import Button from ".";
import theme from "src/themes";

export default {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
};

export const OutlinedButton = {
  args: {
    children: DONATE_BLOOD,
    variant: "outlined",
    outlineColor: theme.palette.primary.main,
  },
};

export const LargeContainedButton = {
  args: {
    children: GET_BLOOD_NOW,
    size: "large",
    variant: "contained",
  },
};

export const LargeOutlinedButton = {
  args: {
    children: SIGN_IN,
    size: "large",
    variant: "outlined",
  },
};

export const FullWidthButton = {
  args: {
    children: SIGN_IN,
    variant: "contained",
    width: "100%",
  },
};

export const DiasbleButton = {
  args: {
    children: REGISTER_NOW,
    variant: "contained",
    disabled: true,
  },
};
