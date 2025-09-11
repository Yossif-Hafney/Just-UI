# Facebook UI Icons Guide

This project uses the `react-icons` library which provides access to thousands of icons from popular icon sets.

## Available Icon Sets

### Font Awesome Icons (fa)

```tsx
import { FaFacebookF, FaHome, FaHeart } from "react-icons/fa";
```

### Material Design Icons (md)

```tsx
import { MdHome, MdNotifications, MdMessage } from "react-icons/md";
```

### Bootstrap Icons (bs)

```tsx
import { BsHeart, BsHeartFill, BsChatDots } from "react-icons/bs";
```

### Hero Icons (hi)

```tsx
import { HiHome, HiHeart, HiChat } from "react-icons/hi";
```

## Usage Examples

### Basic Usage

```tsx
import { FaHome } from "react-icons/fa";

function MyComponent() {
  return (
    <div>
      <FaHome size={24} color="#1877f2" />
    </div>
  );
}
```

### With Props

```tsx
<FaHome
  size={24} // Size in pixels
  color="#1877f2" // Color
  className="icon" // CSS class
  style={{ margin: "10px" }} // Inline styles
/>
```

### Common Facebook UI Icons

#### Navigation

- `FaHome` - Home feed
- `FaUsers` - Friends
- `MdNotifications` - Notifications
- `MdMessage` - Messages
- `FaSearch` - Search

#### Post Interactions

- `MdThumbUp` - Like button
- `FaHeart` / `BsHeart` - Love reaction
- `FaComment` - Comments
- `FaShare` - Share

#### User Interface

- `FaUser` - User profile
- `FaCog` - Settings
- `FaEllipsisH` - More options menu
- `FaPlus` - Add/Create

## Quick Reference

All commonly used icons are exported from `src/assets/icons/index.ts` for easy importing:

```tsx
import {
  FacebookIcon,
  HomeIcon,
  HeartIcon,
  MessageIcon,
  NotificationIcon,
  LikeIcon,
} from "../assets/icons";
```

## Icon Library Documentation

For complete documentation and to browse all available icons, visit:
https://react-icons.github.io/react-icons/
