import { TabFive } from "@/components/profile/TabFive";
import { TabFour } from "@/components/profile/TabFour";
import { TabOne } from "@/components/profile/TabOne";
import { TabThree } from "@/components/profile/TabThree";
import { TabTwo } from "@/components/profile/TabTwo";

export const steps = [
  { id: 0, title: "Personal Info", component: <TabOne /> },
  { id: 1, title: "Account Details", component: <TabTwo /> },
  { id: 2, title: "Address", component: <TabThree /> },
  { id: 3, title: "Upload Photo", component: <TabFour /> },
  { id: 4, title: "Review", component: <TabFive /> },
];
