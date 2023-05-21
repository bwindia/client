import Typography from ".";
import theme from "src/themes";

export default {
  title: "Atoms/Typography",
  component: Typography,
  tags: ["autodocs"],
};

export const H1 = {
  args: {
    children: "Donate Blood",
    variant: "h1",
  },
};

export const H3 = {
  args: {
    children: "Active Donation Requests",
    variant: "h3",
    color: theme.palette.primary.main
  },
};

export const Body1 = {
  args: {
    children:
      "We are Blood Warriors Foundation, a registered NGO with a visionary mission to empower the community and break the stigmas surrounding blood donation for Thalassemia patients. We aspire to be the backbone of support for those affected by this life-altering blood disorder. By fostering policy-level change and promoting prenatal diagnosis, we aim to identify carriers of Thalassemia, and build a future where this debilitating disorder is a thing of the past.",
    variant: "body1",
  },
};
