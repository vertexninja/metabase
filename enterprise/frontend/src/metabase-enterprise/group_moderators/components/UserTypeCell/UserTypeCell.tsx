import React from "react";
import { Member, User } from "metabase-types/api";
import { ChangeTypeButton, UserTypeCellRoot } from "./UserTypeCell.styled";
import Tooltip from "metabase/components/Tooltip";
import { t } from "ttag";
import Icon from "metabase/components/Icon";

interface UserTypeCellProps {
  membership: Member;
  onMembershipUpdate: (user: Member) => void;
}
export const UserTypeCell = ({
  membership,
  onMembershipUpdate,
}: UserTypeCellProps) => {
  const isMember = membership?.type === "member";

  const tooltipText = isMember ? t`Turn into Manager` : t`Turn into Member`;
  const icon = isMember ? "arrow_up" : "arrow_down";

  const handleChangeType = () => {
    onMembershipUpdate({
      ...membership,
      type: isMember ? "manager" : "member",
    });
  };

  return (
    <UserTypeCellRoot>
      {membership.type}
      <Tooltip tooltip={tooltipText} placement="right">
        <ChangeTypeButton onClick={handleChangeType}>
          <Icon name={icon} size={14} />
        </ChangeTypeButton>
      </Tooltip>
    </UserTypeCellRoot>
  );
};
