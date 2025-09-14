// Facebook Icon Components using react-icons library
// 'react-icons/fa' imports Font Awesome icons from the react-icons package

// Font Awesome icons from react-icons/fa
// This imports from: node_modules/react-icons/fa/
import {
  FaFacebookF,
  FaHome,
  FaHeart,
  FaRegHeart,
  FaComment,
  FaShare,
  FaBell,
  FaSearch,
  FaEllipsisH,
  FaPlus,
  FaUser,
  FaUsers,
  FaCog,
  FaSignOutAlt,
  FaThumbsUp,
} from "react-icons/fa";

// Material Design icons from react-icons/md
// This imports from: node_modules/react-icons/md/
import {
  MdHome,
  MdNotifications,
  MdMessage,
  MdMoreHoriz,
  MdThumbUp,
  MdShare,
  MdPerson,
  MdGroup,
  MdVideoCall,
  MdPhoto,
} from "react-icons/md";

// Bootstrap icons from react-icons/bs
// This imports from: node_modules/react-icons/bs/
import {
  BsHeart,
  BsHeartFill,
  BsChatDots,
  BsThreeDots,
  BsPlusCircle,
} from "react-icons/bs";

// Export Font Awesome icons with Facebook-friendly names
export {
  FaFacebookF as FacebookIcon,
  FaHome as HomeIcon,
  FaHeart as HeartIcon,
  FaRegHeart as HeartOutlineIcon,
  FaComment as CommentIcon,
  FaShare as ShareIcon,
  FaBell as NotificationIcon,
  FaSearch as SearchIcon,
  FaEllipsisH as MenuIcon,
  FaPlus as PlusIcon,
  FaUser as UserIcon,
  FaUsers as GroupIcon,
  FaCog as SettingsIcon,
  FaSignOutAlt as LogoutIcon,
  FaThumbsUp as ThumbsUpIcon,
};

// Export Material Design icons
export {
  MdHome as HomeIconMD,
  MdNotifications as NotificationIconMD,
  MdMessage as MessageIcon,
  MdMoreHoriz as MoreIcon,
  MdThumbUp as LikeIcon,
  MdShare as ShareIconMD,
  MdPerson as PersonIcon,
  MdGroup as GroupIconMD,
  MdVideoCall as VideoCallIcon,
  MdPhoto as PhotoIcon,
};

// Export Bootstrap icons
export {
  BsHeart as HeartIconBS,
  BsHeartFill as HeartFillIcon,
  BsChatDots as ChatIcon,
  BsThreeDots as ThreeDotsIcon,
  BsPlusCircle as PlusCircleIcon,
};

// Custom Facebook Home Icon (using the official Facebook SVG)
export const FacebookHomeIcon = ({
  className = "w-6 h-6",
}: {
  className?: string;
}) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
    className={className}
  >
    <path d="M9.464 1.286C10.294.803 11.092.5 12 .5c.908 0 1.707.303 2.537.786.795.462 1.7 1.142 2.815 1.977l2.232 1.675c1.391 1.042 2.359 1.766 2.888 2.826.53 1.059.53 2.268.528 4.006v4.3c0 1.355 0 2.471-.119 3.355-.124.928-.396 1.747-1.052 2.403-.657.657-1.476.928-2.404 1.053-.884.119-2 .119-3.354.119H7.93c-1.354 0-2.471 0-3.355-.119-.928-.125-1.747-.396-2.403-1.053-.656-.656-.928-1.475-1.053-2.403C1 18.541 1 17.425 1 16.07v-4.3c0-1.738-.002-2.947.528-4.006.53-1.06 1.497-1.784 2.888-2.826L6.65 3.263c1.114-.835 2.02-1.515 2.815-1.977zM10.5 13A1.5 1.5 0 0 0 9 14.5V21h6v-6.5a1.5 1.5 0 0 0-1.5-1.5h-3z"></path>
  </svg>
);

// Custom Facebook Videos Icon
export const FacebookVideosIcon = ({
  className = "w-6 h-6",
}: {
  className?: string;
}) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
    className={className}
  >
    <path d="M10.996 8.132A1 1 0 0 0 9.5 9v4a1 1 0 0 0 1.496.868l3.5-2a1 1 0 0 0 0-1.736l-3.5-2z"></path>
    <path d="M14.573 2H9.427c-1.824 0-3.293 0-4.45.155-1.2.162-2.21.507-3.013 1.31C1.162 4.266.817 5.277.655 6.477.5 7.634.5 9.103.5 10.927v.146c0 1.824 0 3.293.155 4.45.162 1.2.507 2.21 1.31 3.012.802.803 1.813 1.148 3.013 1.31C6.134 20 7.603 20 9.427 20h5.146c1.824 0 3.293 0 4.45-.155 1.2-.162 2.21-.507 3.012-1.31.803-.802 1.148-1.813 1.31-3.013.155-1.156.155-2.625.155-4.449v-.146c0-1.824 0-3.293-.155-4.45-.162-1.2-.507-2.21-1.31-3.013-.802-.802-1.813-1.147-3.013-1.309C17.866 2 16.397 2 14.573 2zM3.38 4.879c.369-.37.887-.61 1.865-.741C6.251 4.002 7.586 4 9.5 4h5c1.914 0 3.249.002 4.256.138.978.131 1.496.372 1.865.74.37.37.61.888.742 1.866.135 1.007.137 2.342.137 4.256 0 1.914-.002 3.249-.137 4.256-.132.978-.373 1.496-.742 1.865-.369.37-.887.61-1.865.742-1.007.135-2.342.137-4.256.137h-5c-1.914 0-3.249-.002-4.256-.137-.978-.132-1.496-.373-1.865-.742-.37-.369-.61-.887-.741-1.865C2.502 14.249 2.5 12.914 2.5 11c0-1.914.002-3.249.138-4.256.131-.978.372-1.496.74-1.865zM8 21.5a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8z"></path>
  </svg>
);

// Custom Facebook Marketplace Icon
export const FacebookMarketplaceIcon = ({
  className = "w-6 h-6",
}: {
  className?: string;
}) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
    className={className}
  >
    <path d="M1.588 3.227A3.125 3.125 0 0 1 4.58 1h14.84c1.38 0 2.597.905 2.993 2.227l.816 2.719a6.47 6.47 0 0 1 .272 1.854A5.183 5.183 0 0 1 22 11.455v4.615c0 1.355 0 2.471-.119 3.355-.125.928-.396 1.747-1.053 2.403-.656.657-1.475.928-2.403 1.053-.884.12-2 .119-3.354.119H8.929c-1.354 0-2.47 0-3.354-.119-.928-.125-1.747-.396-2.403-1.053-.657-.656-.929-1.475-1.053-2.403-.12-.884-.119-2-.119-3.354V11.5l.001-.045A5.184 5.184 0 0 1 .5 7.8c0-.628.092-1.252.272-1.854l.816-2.719zM10 21h4v-3.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V21zm6-.002c.918-.005 1.608-.025 2.159-.099.706-.095 1.033-.262 1.255-.485.223-.222.39-.55.485-1.255.099-.735.101-1.716.101-3.159v-3.284a5.195 5.195 0 0 1-1.7.284 5.18 5.18 0 0 1-3.15-1.062A5.18 5.18 0 0 1 12 13a5.18 5.18 0 0 1-3.15-1.062A5.18 5.18 0 0 1 5.7 13a5.2 5.2 0 0 1-1.7-.284V16c0 1.442.002 2.424.1 3.159.096.706.263 1.033.486 1.255.222.223.55.39 1.255.485.551.074 1.24.094 2.159.1V17.5a2.5 2.5 0 0 1 2.5-2.5h3a2.5 2.5 0 0 1 2.5 2.5v3.498zM4.581 3c-.497 0-.935.326-1.078.802l-.815 2.72A4.45 4.45 0 0 0 2.5 7.8a3.2 3.2 0 0 0 5.6 2.117 1 1 0 0 1 1.5 0A3.19 3.19 0 0 0 12 11a3.19 3.19 0 0 0 2.4-1.083 1 1 0 0 1 1.5 0A3.2 3.2 0 0 0 21.5 7.8c0-.434-.063-.865-.188-1.28l-.816-2.72A1.125 1.125 0 0 0 19.42 3H4.58z"></path>
  </svg>
);

// Custom Facebook Groups Icon
export const FacebookGroupsIcon = ({
  className = "w-6 h-6",
}: {
  className?: string;
}) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
    className={className}
  >
    <path d="M.5 12c0 6.351 5.149 11.5 11.5 11.5S23.5 18.351 23.5 12 18.351.5 12 .5.5 5.649.5 12zm2 0c0-.682.072-1.348.209-1.99a2 2 0 0 1 0 3.98A9.539 9.539 0 0 1 2.5 12zm.84-3.912A9.502 9.502 0 0 1 12 2.5a9.502 9.502 0 0 1 8.66 5.588 4.001 4.001 0 0 0 0 7.824 9.514 9.514 0 0 1-1.755 2.613A5.002 5.002 0 0 0 14 14.5h-4a5.002 5.002 0 0 0-4.905 4.025 9.515 9.515 0 0 1-1.755-2.613 4.001 4.001 0 0 0 0-7.824zM12 5a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm-2 4a2 2 0 0 0 4 0 2 2 0 0 0-4 0zm11.291 1.01a9.538 9.538 0 0 1 0 3.98 2 2 0 0 1 0-3.98zM16.99 20.087A9.455 9.455 0 0 1 12 21.5c-1.83 0-3.54-.517-4.99-1.414a1.004 1.004 0 0 1-.01-.148V19.5a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v.438a1 1 0 0 1-.01.148z"></path>
  </svg>
);
