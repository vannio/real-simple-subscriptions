import withProps from 'recompose/withProps';
import SidebarItem from './SidebarItem';
import { getUnreadCount } from '../../../utils/getUnreadCount';

const enhance = withProps(props => ({
  unreadCount: getUnreadCount(props.subscription),
}));

export default enhance(SidebarItem);
