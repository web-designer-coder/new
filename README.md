🌍 E-Waste Management System – Responsive Web UI

A fully responsive and interactive frontend-only web platform that promotes sustainable e-waste management. This project raises awareness and encourages responsible electronic waste disposal through an engaging, informative, and reward-driven interface.

🧠 Overview
This project educates users about e-waste and provides an intuitive way to:

📦 Schedule pickups of electronic waste

📍 Locate drop-off points

🧾 Track waste contribution and rewards

📚 Learn about the circular economy and e-waste's environmental impact

📂 Folder Structure 
          new-main/
          ├── new.html                 # Main HTML file
          ├── style.css                # Styling for all UI components
          ├── script.js                # JavaScript for interactivity and dashboard
          ├── PCCOE.png                # Left logo in the header (institution branding)
          ├── a72cfac1165c3d67b57e5bbee93ad550.jpg  # Right image/logo (visual balance)
          └── README.md                # Project documentation

💻 Technologies Used
          HTML5 – Markup structure
          
          CSS3 – Styling with hover effects, modals, collapsible content
          
          JavaScript – DOM handling, dashboard interactivity, modal logic

📌 Key Features
🔄 Interactive Dashboard
Track the total e-waste contributed (kg) and reward points earned. Users can manually add waste or schedule pickups to update the dashboard in real time.

📆 Schedule Pickup Modal
A modal form allows users to:

        Enter pickup address
        
        Select pickup date

Enter amount of e-waste
Once submitted, a confirmation is shown, and the dashboard updates.

📝 Contact Form
Collects name, email, and message. Simulates form submission and thanks the user via alert.

📚 Educational Sections
Includes well-written and collapsible sections on:

          What is E-Waste
          
          Benefits of Recycling
          
          The Circular Economy
          
          Global Statistics
          
          Disposal Tips
          
          Case Studies

🎁 Reward System
Users earn 10 points per kg of recycled e-waste and can redeem them (simulated).

🧪 How to Run
Download or clone the project folder.

Open new.html directly in any modern web browser (no backend required).

Test the interface by:

          Navigating to different sections via nav bar
          
          Scheduling a pickup
          
          Adding e-waste
          
          Redeeming rewards
          
          Expanding educational sections

💡 This is a static UI prototype. No server/backend or database is connected.


📍 new.html UI with navbar and header
📦 Schedule Pickup modal
📈 Dashboard with updated values
📚 Collapsible theory sections
📌 Future Scope
🔌 Integrate with Flask or Node.js backend

🧠 Use ML model to estimate reward value or categorize e-waste

📍 Implement Google Maps for live drop-off points

📦 Backend storage for pickup data and users

📲 Convert into a PWA (Progressive Web App)

📃 License

This project is released under the MIT License – feel free to use, modify, and share.
