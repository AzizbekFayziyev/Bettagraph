import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export interface ILink {
  text: string;
  link: string;
}

export interface IService {
  title: string;
  desc: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}

export interface IProgress {
  number: number;
  title: string;
  desc: string;
}
