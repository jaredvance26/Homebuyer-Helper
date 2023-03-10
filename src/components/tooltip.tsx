import React, { ReactElement } from "react";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import "../css/components.css";
import question from "../images/question.png";

interface TooltipProps {
  content: string;
}

export const Tooltip = (props: TooltipProps): ReactElement => {
  const { content } = props;
  return (
    <div className="tooltip-container">
      <div className="tooltip-content">{content}</div>
      <div className="tooltip">
        <img src={question} alt="question" />
      </div>
    </div>
  );
};
