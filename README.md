# SkillSwap - Skill Exchange Platform

**SkillSwap** is a community-driven web platform that enables users to exchange skills and knowledge without monetary transactions.
It's a peer-to-peer skill trading system where users can teach what they know and learn what they don't—all through mutual skill exchanges.

---

## 🎯 Purpose

The platform addresses the following needs:

1. **Skill Sharing**: Connect people who want to share their expertise with those who want to learn
2. **Community Learning**: Foster a collaborative learning environment through peer-to-peer teaching
3. **No-Cost Education**: Enable knowledge exchange without financial barriers
4. **Flexible Scheduling**: Allow users to arrange skill exchange sessions based on mutual availability

---

## 🏗️ Project Structure

```
SkillsSwapp/
├── index.html         # Landing page with hero and "How it works"
├── browse.html        # Browse and filter available skills
├── profile.html       # User profile with skills, reviews, stats
├── proposals.html    # Manage skill exchange proposals
├── messages.html      # Chat/messaging system
├── schedule.html      # Calendar and session scheduling
├── settings.html     # Account and app settings
├── app.js            # Shared JavaScript (sidebar, navigation)
└── README.md          # This file
```

---

## 💻 Technology Stack

| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic markup structure |
| **Tailwind CSS** (CDN) | Utility-first styling |
| **Vanilla JavaScript** | Client-side interactivity |
| **Google Fonts** | Typography (Syne, DM Sans) |

---

## 🔑 Key Features

### 1. Skill Browsing (`browse.html`)
- Search skills by keyword
- Filter by category (Technology, Language, Design, Music, Fitness, Business)
- Filter by skill level (Beginner, Intermediate, Expert)
- Filter by availability (Flexible, Weekends, Evenings)
- View skill details, teacher info, ratings, and reviews

### 2. User Profiles (`profile.html`)
- Personal information display
- **Skills I Offer**: Skills the user can teach
- **Skills I Want to Learn**: Skills the user is interested in learning
- Activity statistics (active swaps, sessions completed, rating, reviews)
- Availability schedule
- User reviews from past exchanges

### 3. Proposals System (`proposals.html`)
- **Received Proposals**: View incoming skill exchange requests
  - Accept, decline, or message the sender
  - View exchange details (what they offer vs. what you offer)
  - See proposal status (Pending, Accepted, Declined)
- **Sent Proposals**: Track outgoing exchange requests

### 4. Messaging (`messages.html`)
- Real-time chat interface
- Conversation list with recent messages
- Online status indicators
- Quick actions (schedule session, view proposal)

### 5. Scheduling (`schedule.html`)
- Interactive calendar view
- Upcoming sessions overview
- Schedule new sessions with exchange partners
- Session duration options (30min, 1hr, 1.5hr, 2hr)

### 6. Settings (`settings.html`)
- **Account**: Name, email, location, bio management
- **Password**: Change password functionality
- **Notifications**: Toggle email and push notifications
- **Privacy**: Profile visibility, location sharing, activity status
- **Danger Zone**: Account deactivation and deletion

---## 🎨 sample pages
<img width="1355" height="640" alt="image" src="https://github.com/user-attachments/assets/c2db67d0-18e4-4e3c-b24d-0cbce93b9c8b" />

---## 🎨 message page

<img width="1363" height="640" alt="image" src="https://github.com/user-attachments/assets/5d571c02-f007-46d7-b149-e421097ddcaa" />



## 🎨 Design System

### Color Palette
| Color | Hex | Usage |
|-------|-----|-------|
| Deep | `#0f172a` | Background (dark) |
| Surface | `#1e293b` | Cards, sidebar |
| Card | `#263348` | Content cards |
| Amber | `#f97316` | Primary accent |
| Teal | `#14b8a6` | Secondary accent |

### Typography
- **Display Font**: Syne (headings, titles)
- **Body Font**: DM Sans (body text, UI elements)

### Layout
- **Desktop**: Fixed sidebar (240px) + main content area
- **Mobile**: Collapsible sidebar with hamburger menu
- **Responsive breakpoints**: 640px, 768px, 1024px

---

## ⚙️ How It Works

### User Flow

```
1. Create Profile
   ├── List skills you can teach (Offer)
   └── List skills you want to learn (Want)

2. Browse Skills
   ├── Search available skills
   ├── Filter by category/level/availability
   └── View teacher profiles and ratings

3. Propose Exchange
   ├── Select a skill you're interested in
   ├── Specify what you're offering in return
   └── Send proposal to the skill owner

4. Negotiate
   ├── Receive/make counter-offers
   ├── Accept or decline proposals
   └── Chat to discuss terms

5. Schedule & Learn
   ├── Pick a mutually available time
   ├── Conduct the skill exchange session
   └── Leave reviews for each other
```

### Sample Skills Data
The platform comes pre-populated with example skills:
- Web Development & React (Expert)
- Graphic Design – Canva & Adobe (Expert)
- Spanish Conversation & Grammar (Intermediate)
- Piano Fundamentals (Beginner)
- Data Science with Python (Intermediate)
- Yoga & Mindfulness (Beginner)
- Business English Writing (Intermediate)
- UI/UX Design Fundamentals (Beginner)

---

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for CDN resources)

### Running the Project
1. Clone or download the repository
2. Open `index.html` in your browser
3. Navigate through the sidebar to explore all features

---

## 📱 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |

---

## 🔮 Future Enhancements

Potential improvements for a production version:
- Backend integration with database
- User authentication system
- Real-time WebSocket messaging
- Video conferencing for online sessions
- Payment integration for premium features
- Mobile native applications
- Skill rating verification system

---

## 📄 License

This is a demonstration project created by Elise byiringiro.

