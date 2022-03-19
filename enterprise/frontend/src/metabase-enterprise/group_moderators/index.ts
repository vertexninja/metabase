import { hasPremiumFeature } from "metabase-enterprise/settings";
import { PLUGIN_GROUP_MODERATORS } from "metabase/plugins";
import { UserTypeCell } from "./components/UserTypeCell";

if (hasPremiumFeature("advanced_permissions")) {
  PLUGIN_GROUP_MODERATORS.UserTypeCell = UserTypeCell;
}
