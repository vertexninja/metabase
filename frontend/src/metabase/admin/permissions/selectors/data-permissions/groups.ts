import { createSelector } from "reselect";
import _ from "underscore";

import Groups from "metabase/entities/groups";
import { Group } from "metabase-types/api";
import { isAdminGroup, isDefaultGroup } from "metabase/lib/groups";

const isPinnedGroup = (group: Group) =>
  isAdminGroup(group) || isDefaultGroup(group);

export const getOrderedGroups = createSelector(
  Groups.selectors.getList,
  (groups: Group[]) => _.partition(groups, isPinnedGroup),
);
