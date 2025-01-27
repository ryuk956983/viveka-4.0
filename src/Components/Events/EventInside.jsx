import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";


const EventInside = () => {
  const events = [
    {
      title: "Laser Light Show",
      img: "./assets/events/laser light show.97f610deaba5a75050fb.png",
      discription:
        "Step into a world of magic and rhythm with the Laser Light Extravaganza, the highlight of TechFest! This immersive event combines dazzling laser displays with pulsating music and energetic dance performances, creating an unforgettable experience. To add a spark of romance, special couple events bring an enchanting charm to the festivities.",
      category: "University Only",
      individual: "80",
      couple: "150",
      register:"https://docs.google.com/forms/d/e/1FAIpQLSf_keYfwx-wJqQaVi-ZnADoJ27mXgKYN6uPoFewCf_qH9EmUQ/viewform",
      group: "400",
      groupMembers: "5",
      location: "Mini Audi",
      
      date: "06th February, 2025",
      time: "2:00 PM",
      contact: [
        {
          name: "Kshitij ",
          number: "9455813610",
        },
        {
          name: "Devesh Punjabi",
          number: "9171658780",
        },
        {
          name: "Shiv Manglam Dubey",
          number: "9151702366",
        },
      ],
    },
    {
      title: "AI Workshop (Generative AI)/ Power Bi Workshop",
      img: "./assets/events/AI.88953e637ed03bc56f45.jpg",
      discription:
        "AI Workshop (Generative AI) : Learn the fundamentals of Generative AI, including neural networks and applications in content creation and design. Power BI Workshop : Discover how to use Power BI for data visualization, analysis, and creating interactive dashboards.",
      category: "University Only",
      register:"https://forms.gle/rzMvpSPZ64B5SJDZ6",
      individual: "50",
      location: "Mini Audi",
      
      date: "08th February, 2025",
      time: "3:00 PM",
      contact: [
        {
          name: "Harshita Singh",
          number: "9336508115",
        },
        {
          name: "Devesh Punjabi",
          number: "9171658780",
        },
      ],
    },
    {
      title: "Workshop on configuring the Network Layers",
      img: "./assets/events/Network.b66efe67f84f84647e35.jpg",
      discription:
        "This workshop provides an in-depth understanding of the structure and functionality of network layers. Participants will learn about network architecture, protocols, IP addressing, subnetting, and security configurations. The session is designed to enhance knowledge and understanding of how network layers operate to facilitate seamless communication.",
      category: "University Only",
      individual: "To be Revealed Soon",
      location: "Mini Audi",
      
      register:"https://forms.gle/qfuFVjeE3HyNRD3x8",
      date: "07th February, 2025",
      time: "4:30 PM",
      contact: [
        {
          name: "Ayush Krishna ",
          number: "9919111244",
        },
      ],
    },
    {
      title: "CodeX",
      img: "./assets/events/codex.1b960ae8bb05f752c1df.png",
      discription:
        "CodeX is a premier technical event of Viveka where participants put their problemsolving skills in their preferred programming language (C/C++/Java/Python) into text to develop the best possible solution for a real-life problem.",
      category: "University Only",
      duo: "160",
      rules:[
        "The coding challenge will be conducted in only C, Python, Java and C++ and participants would be given to choose any one of them.",
        "Participants can compete individually or in teams of two, categorized based on their year of study. Programming languages allowed include C, C++, Python, and Java.",
        "The competition consists of two sections: MCQs and application-based coding questions",
        "Participants will use an online IDE or their own laptop (after inspection) for coding.",
        "Judging criteria include solution correctness, efficiency, and coding style.",
        "Winners will be announced within two days, with prizes and goodies to be awarded.",
      ],
      location: "B2 Ground Floor - Computer Labs",
      register:"https://docs.google.com/forms/d/e/1FAIpQLSfd1SJgKLROLYWtOh_9k_CTEfiMzwtSGPxbuTJRHFKEFCGyqg/viewform",
      prize: [
        "Prize Money + Exciting Rewards.",
        "Winners will be enlisted in the Hall of Fame of SRMU's Innovation Hub.",
        "Participation Certificates by IEEE and CIIE for all participants.",
      ],
      date: "06th February, 2025",
      time: "12:30 PM",
      contact: [
        {
          name: "Shrinjay Shresth ",
          number: "9334916387",
        },
        {
          name: "Sankalp Jaiswa",
          number: " 8303584456",
        },
        {
          name: "Pragya Sharma",
          number: "6387543491",
        },
        {
          name: "Haider Ali ",
          number: "7388190105",
        },
      ],
    },
    {
      title: "Find the Language",
      img: "./assets/events/find the language.ca1148282c6c58746a08.png",
      discription:
        "Showcase your programming knowledge in this fast-paced competition! Participants will test their skills in identifying programming language syntax under strict time limits. Challenge yourself and compete against the best to win exciting rewards.",
      category: "University Only",
      register:"https://docs.google.com/forms/d/e/1FAIpQLSf2TD5LoEUexvHkwpVcS22hKjAEmOsyt22Dgn6hK6cUX9p5ZQ/viewform",
      individual: "50",
      rules: [
        "Participants must report 30 minutes before the event starts at the reporting desk.",
        "College ID or proof of identity is mandatory.",
        "Registration receipts must be carried by participants.",
        "Misbehavior during the event will lead to disqualification.",
        "Late participants will be disqualified.",
        "Organizers' decisions are final in case of disputes.",
      ],
      location: "B2 - Computer Labs",
      prize: [
        "Prize Money + Exciting Rewards.",
        "Winners will be enlisted in the Hall of Fame of SRMU's Innovation Hub.",
        "Participation Certificates by IEEE and CIIE for all participants.",
      ],
      date: "08th February, 2025",
      time: "12:30 PM",
      contact: [
        {
          name: "Priyanshi Srivastava",
          number: "8687968902",
        },
        {
          name: "Anjali Srivastava",
          number: "8601438889",
        },
        {
          name: "Ansh Kumar Singh",
          number: "xxxxxx9098",
        },
      ],
    },
    {
      title: "Hack-a-thon",
      img: "./assets/events/hack-a-thon.6bee251c3e0f6bae3629.png",
      discription:
        "Welcome to the Hackathon event as part of Viveka 4.0 – the Techfest of Shri Ramswaroop Memorial University! This competition is designed to bring out the creativity, innovation, and problem solving skills of participants across both school and college levels.",
      category: "School / University",
      individual: "100 (School Students Only)",
      group: "200 (University Students Only)",
      groupMembers: "4",
      register:"https://forms.gle/NnRPxcW79oaAfoHR6",
      rules: [
        "Teams must register before the specified deadline. Teams must provide all required information during registration.",
        "All ideas and projects must align with the problem statements. Plagiarized content will lead to disqualification. Projects must include a working demo.",
        "Presentations must not exceed 10 minutes. Teams will have an additional 5 minutes for Q&A with judges.",
        "All participants must adhere to campus rules and regulations. Teams are expected to arrive on time and be ready for their presentation slot.",
        "The decision of the judges will be final and binding.",
      ],
      location: "B2 - 305, B1 - 007",
      prize: [
        "Prize Money + Exciting Rewards.",
        "Winners will be enlisted in the Hall of Fame of SRMU's Innovation Hub.",
        "Participation Certificates by IEEE and CIIE for all participants.",
      ],
      date: "06th February, 2025 (For School Participants) 07th February, 2025 (For University Participants)",
      time: "1:00 PM (For School Participants) 12:30 PM (For University Participants)",
      contact: [
        {
          name: "Shrinjay Shresth",
          number: "9334916387",
        },
        {
          name: "Mohd Tabish Khan",
          number: "9519493113",
        },
        {
          name: "Aditya Gupta",
          number: "8303420320",
        },
      ],
    },
    {
      title: "Bug Hunting",
      img: "./assets/events/Bug.eb80efef7ebedb43c833.jpg",
      discription:
        "Join 'Hunt the Bugs, Master the Code', an exciting bug-hunting challenge where you’ll showcase your cybersecurity skills! Explore real-world scenarios, identify vulnerabilities in systems and applications, and tackle hands-on tasks using tools like Burp Suite, OWASP ZAP, and Wireshark. Whether you’re a budding ethical hacker or a pro, this is your chance to test and enhance your technical expertise!",
      category: "University Only",
      individual: "100",
      duo: "100",
register:"https://forms.gle/EtWLS7nfUbD6y6pw5",
      rules: [
        "Participants must complete all tasks independently without external help.",
        "Each level will have a strict time limit that must be followed.",
        "All participants must report to the venue at least 30 minutes before the event starts; latecomers will be disqualified.",
        "Any form of misbehaviour or misconduct will lead to immediate disqualification.",
        "The use of electronic devices, including calculators and mobile phones, is strictly prohibited during the event.",
      ],
      location: "B2 - 008",

      date: "08th February, 2025 ",
      time: "4:00 PM",
      contact: [
        {
          name: "Harshita Singh",
          number: "9336508115",
        },
      ],
    },
    {
      title: "Digi Art",
      img: "./assets/events/digi art.9a96000d8606d39a45bd.png",
      discription:
        "Participants will create original designs based on the disclosed theme during the session. Logo Design involves crafting unique logos using tools like Canva, Photoshop, or Figma within 1 hour, followed by 15 minutes for submission in PNG, JPEG, or SVG format with a brief description.nUI/UX Design focuses on creating user-friendly interfaces using Figma or Adobe XD within 2 hours with 15 minutes for submission as a prototype or PDF. The emphasis is on simplicity, creativity, and relevance, with all work completed during the event.",
      category: "University Only",
      individual: "100 For UI/UX and 50 for Logo Design",
      duo: "150",
      registor:"https://docs.google.com/forms/d/e/1FAIpQLScFh-nNrVyHZ6z3qydVIDa7COxgy-z-Q9RkdO_4KGD1aB351w/viewform",
      prize: [
        "Prize Money and Exciting Rewards for the winners.",
        "Winners will be enlisted in the Hall of Fame of SRMU's Innovation Hub.",
        "Participation Certificates from IEEE and CIIE for all participants.",
      ],

      rules: [
        "Teams must register before the specified deadline",
        "Participants must have a valid college ID or any proof of identity.",
        "Report 30 minutes before the event at the reporting desk.",
        "Plagiarism, use of pre-existing templates, pre-built logo elements, use of AI tools will lead to disqualification.",
        "Misbehavior or any form of misconduct will lead to disqualification.",
      ],
      location: "B2- 006 , B2 - 004",

      date: "08th February, 2025 ",
      time: "2:15 PM",
      contact: [
        {
          name: "Divyanshi Pandey",
          number: " 9455277431",
        },
        {
          name: "Anshuma Yadav",
          number: "9369885065",
        },
        {
          name: "Angad Singh",
          number: "8303449400",
        },
      ],
    },
    {
      title: "Robo दौड़",
      img: "./assets/events/robo DAUD.53317eea61b088eab172.png",
      discription:
        "Navigate your robot through a challenging obstacle course and reach the finish line in record time! Showcase your engineering skills, strategy, and precision to conquer the hurdles and claim the top spot",
      category: "School / University ",
register:"https://docs.google.com/forms/d/e/1FAIpQLSeUNy5TJ3wjHwc9sltW3fEmmCkOXr4h1bLqQbylccgFy1FIKA/viewform",
      duo: "100 for School of max 2 members",
      group: "150",
      groupMembers: "3",
      prize: [
        "Prize Money and Exciting Rewards for the winners.",
        "Winners will be enlisted in the Hall of Fame of SRMU's Innovation Hub.",
        "Participation Certificates from IEEE and CIIE for all participants.",
      ],

      rules: [
        "Participants must report on time (30 minutes before the event) at the reporting desk.",
        "Carry a valid college ID or proof of identity.",
        "Misbehavior during the event will result in disqualification.",
        "Robots must complete the arena track in the minimum time from start to finish",
        "Seek assistance from volunteers in case of inconvenience.",
        "No test practice will be allowed in the arena",
        "Team members can touch or reset their robot’s position only twice. However, this action would lead to a time penalty and timer will not stop during this process.",
        "Robot Size: 30×30×30 cm",
        "If a bot is touched or falls of the track, it should restart from the last checkpoint",
        "Robot Weight: 4 kg (tolerance: ±5%)",
"Voltage Limit: 15V (tolerance: ±10%)",
"Decision of the Event Organisers are final and everyone should respect their decision"
    ],
      location: "BBC Ground",

      date: "06th February, 2025 (For School Participant) and 07th Februrary, 2025 (For University Patricipant)",
      time: "2:00 PM (For School Participant) and 12:30 PM (For University Patricipant)",
      contact: [
        {
          name: "Kushagra Chaturvedi",
          number: "8882304190",
        },
        {
          name: "Nirbhay Singh",
          number: "7318336266",
        },
        {
          name: "Shiv Manglam Dubey",
          number: "9151702366",
        },
      ],
    },
    {
      title: "Robo फुटबॉल",
      img: "./assets/events/robo FOOTBALL.af88c5c5223574e5f82b.png",
      discription:"Put your bot-building and soccer skills to the test in Robo Soccer! Compete in a fast-paced knockout tournament where strategy, control, and teamwork will determine the champion. Outplay your opponents and lead your bot to victory!",
      category: "School / University",
      register:"https://docs.google.com/forms/d/e/1FAIpQLSeoPSEApFsAEUxiP9eX0iqv0ChJh58Ke_aROJlAtckuGgsxPQ/viewform",
      duo: "100 For only School of Max 2 Members ",
      group  :"150 for only University of Max 3 Members ",
     
      prize: [
        "Prize Money and Exciting Rewards for the winners.",
        "Winners will be enlisted in the Hall of Fame of SRMU's Innovation Hub.",
        "Participation Certificates from IEEE and CIIE for all participants.",
      ],

      rules: [
        "A soccer knockout match between two bots. (Two teams)",
        "If you have your bots you can bring it else we will provide.",
       
"Voltage: 15V (10% tolerance).",
"Bot Dimensions: 35x35x35 cm.",
"Weight Category: 5 kg (±5% tolerance).",
"The match duration is 2 minutes with a 1-minute timeout allowed per match.",
"All participants are required to report 30 minutes before the event starts at the reporting desk.",
"Each participant must carry a valid college ID card or an acceptable proof of identity.",
"No test Practice will be allowed in the arena.",
"Only one participant should control the robot no player can be exchanged in the match.",
"Human interference (example- touching the robot) during the game is not allowed.",
"Any form of misbehavior during the event or rounds will result in immediate disqualification.",
"Participants must be present at the specified time; absent participants will be disqualified.",
      ],
      location: "BBC Ground",

      date: "08th February, 2025 (for School Participant) and 07th February, 2025 (for University Participant)",
      time: "2:00 PM (for School Participant) and 12:30 PM (for University Participant)",
      contact: [
        {
          name: "Aadi Chandra",
          number: " 9335402749",
        },
        {
          name: "Yash Mishra",
          number: "6306974406",
        },
        {
          name: "Shresth Sharma",
          number: "8840414915",
        },
      ]
    },
    {
      title: "Path Finder:Robot",
      img: "./assets/events/path fnder-robot.667a7c2d533d230be45d.png",
      discription:"Dive into the world of robotics with Mesmerize, an exhilarating competition where innovation meets precision! In this event. Teams will design and build an autonomous bot capable of navigating a maze by following white lines, analyzing paths, and reaching the endpoint in record time.",
      category: "University Only",
     register:"https://docs.google.com/forms/d/e/1FAIpQLSeL3ITddNL2kCzqSOBbYkuTCcNHJV0DZpWlUxAcnDliETN7Og/viewform",
      group  :"150",
      groupMembers :"3",
     
      prize: [
        "Prize Money and Exciting Rewards for the winners.",
        "Winners will be enlisted in the Hall of Fame of SRMU's Innovation Hub.",
        "Participation Certificates from IEEE and CIIE for all participants.",
      ],

      rules: [
        "Maximum 3 persons are allowed in a team.",
        "Each team must build an autonomous robot capable of following a white lineand analyzing the path in the maze.",
       
"The robot must navigate through the maze from the starting point to theending point in the minimum possible time.",
"Teams must ensure their robot can autonomously navigate the arena,following the lines and adjusting directions as needed.",
],
      location: "B1 - 310",

      date: "07th February, 2025 ",
      time: "2:00 PM",
      contact: [
        {
          name: "Nitin Jaiswal",
          number: "8765610216",
        },
        {
          name: "Anshu Kasaudhan",
          number: "7068339541",
        },
        {
          name: "Om Jaiswal ",
          number: "7068339541",
        },
      ]
    },
    {
      title: "Robo War",
      img: "./assets/events/robo war.ac95b658314d04f4b52c.png",
      discription:"Prepare for an electrifying faceoff in Mini War, a knockout competition that pits mini bots against each other in a highintensity war arena! Bring your custom-built bot to battle it out or glory, strategy, and mechanical supremacy. Let your innovation and engineering skills shine in this thrilling event.",
      category: "University Only",
     register:"https://docs.google.com/forms/d/e/1FAIpQLSeLpJmm7mUpiuRxFZ_xYxloI6xX8oXrY_5lVdW-iSTu_NPdgA/viewform",
      group  :"250",
      groupMembers :"3",
     
      prize: [
        "Prize Money and Exciting Rewards for the winners.",
        "Winners will be enlisted in the Hall of Fame of SRMU's Innovation Hub.",
        "Participation Certificates from IEEE and CIIE for all participants.",
      ],

      rules: [
        "The competition will be a knockout event held in a war arena.",
        "Each team must bring their own robot for the competition.",
        'The robot specifications are as follows :',
       " Voltage: 15Volts (10% tolerance).",
       " Bot Dimensions: 35x35x35 cm.",
       " Weight Category: 5 kg (±5% tolerance).",
       " Power supply should be mounted on the bot itself i.e.no external battery or adaptor supply is allowed.",
       " The match duration is 3 minutes with a 1-minute timeout allowed per match. Team members can touch or reset their robot’s position only twice during the match and the timer will not stop during this process.",
       " The length of the wire (for wired bots) should be long enough to cover the whole track and the wire should remain slack during the complete match.",
       " The robot that immobilizes or defeats its opponent within the matchduration will be declared the winner of the round",
        "Teams will progress to the next round based on knockouts until a finalwinner is declared.",
      ],
      location: "BBC Ground",

      date: "07th February, 2025 ",
      time: "2:00 PM",
      contact: [
        {
          name: "Pragya Sharma",
          number: "6387543491",
        },
        {
          name: "Gautam Sharma",
          number: "9135256579",
        },
        {
          name: "Dhruv Pathak",
          number: "8604440669",
        },
      ]
    },
    {
      title: "Drone Race",
      img: "./assets/events/drone race.3c130786094318217886.png",
      discription:"Take to the skies in the exhilarating Drone Race! This highspeed,action-packed event challenges participants to race their drones through a complex obstacle course, testing their piloting skills, precision, and speed. Whether you're an experienced drone racer or a beginner, this event offers the ultimate test of your aerial abilities!",
      category: "University Only",
     register:"https://docs.google.com/forms/d/e/1FAIpQLScb7WGWFHQHYZb3N7Rko-Pvwt_m_0ChJvwzQNZrGraKRHOzlQ/viewform",
      group  :"200",
      groupMembers :"4",
     
      prize: [
       " Hardcopy certificates will be awarded only to the winners.",
"All otherparticipants will receive softcopy certificates."
      ],

      rules: [
       " Complete 2 laps on an obstacle-filled track.",
       " Checkpoints are mandatory; missing one adds a 10-second penalty.",
       " No intentional collisions : violators will be disqualified.",
        "Crashed drones can relaunch from the last checkpoint without pausing the timer.",
      "  Pilots must contain all equipment and airframes within the pilot pit area and must not solder, weld or cause any spark within the pit area.",
       " There is no restriction on the use of any frame material or specification of the BLDC Motors, Electronic Speed Controllers, Propellers, Batteries.",
       " Game Clock : The game clock starts as soon as the referee commands the beginning of the round and stops as soon as the maximum access time (5 Minutes) of that round elapses.",
       " Run Time: Run time starts as soon as the game clock starts/the drone takes/off and stops when the drone lands successfully."
    ],
      location: "Cricket Ground",

      date: "07th February, 2025 ",
      time: "3:30 PM",
      contact: [
        {
          name: "Kshitij Gupta ",
          number: "9455813610",
        },
        {
          name: "Shubham Tiwari ",
          number: "8081766693",
        },
        {
          name: "Utkarsh Singh",
          number: "8756506613",
        },
      ]
    },
    {
      title: "Boat Race",
      img: "./assets/events/boat race.794da8b0292a0df68597.png",
      discription:"Join us for an exhilarating RC Boat Race Challenge, where enthusiasts and competitors will showcase their skills in navigating radio-controlled boats through a watercourse filled with obstacles. Participants will race their RC boats in a specially designed water body, maneuvering through twists, turns, and barriers in the shortest possible time to claim victory.",
      category: "University Only",
     register:"https://docs.google.com/forms/d/e/1FAIpQLSfwxl8_YrrmendHIFHib1_n-cciBQSivonOKAzjuRQiB3V5Fw/viewform",
      group  :"100",
      groupMembers :"2",
     
      prize: [
        "Prize Money and Exciting Rewards for the winners.",
        "Winners will be enlisted in the Hall of Fame of SRMU's Innovation Hub.",
        "Participation Certificates from IEEE and CIIE for all participants."
      ],

      rules: [
       " Knockout matches between two boats",
   "Bring your own boat or use a provided one",
        "Time Limit : 3 minutes per round with a 1-minute timeout.",
       " Penalties will be applied for rule violations."
    ],
      location: "Open Arena",

      date: "07th February, 2025 ",
      time: "3:30 PM",
      contact: [
        {
          name: "Agrim Mishra ",
          number: "9369236427",
        },
        {
          name: "Shubham Mishra",
          number: "8081766693",
        },
        {
          name: "Samarth Kumar",
          number: "8081880868",
        },
      ]
    },
    {
      title: "Structomania",
      img: "./assets/events/structromania.7396853aa6fd421c99a2.png",
      discription:"Step into Structromania, a unique competition where teams design and build wooden structures using limited materials like sticks, threads, and glue. Test your innovation, teamwork, and problem-solving as you create a structure that holds the maximum weight before breaking.",
      category: "University Only",
      group  :"120",
      groupMembers :"4",
     register:"https://docs.google.com/forms/d/e/1FAIpQLSd9TCv_WuVZr7D-cFT_kkTKG0PqQ20z4pMSQt6xIRepvbIWog/closedform",
      prize: [
        "Prize Money and Exciting Rewards for the winners.",
        "Winners will be enlisted in the Hall of Fame of SRMU's Innovation Hub.",
        "Participation Certificates from IEEE and CIIE for all participants."
      ],

      rules: [
        "The structure must be built using only the provided wooden sticks andthread.",
        "Teams must adhere to the material limits specified for the event.",
        "The structure must be freestanding and fit within a predefined base area(dimensions will be announced at the event)",
        "Structures must comply with safety guidelines and not pose any risk toparticipants or judges.",
        "Teams will have 3 hours to complete their structure within the designatedconstruction phase.",
        "Only team members are allowed to work on the structure; external help isstrictly prohibited.",
        "Teams must operate within their assigned workspace.",
        "Teams must carry their registration receipt and valid ID proof forparticipation.",
        "Any misbehavior during the event will lead to immediate disqualification.",
        "Participants must report 30 minutes before the event starts at the reportingdesk"
              ],
      location: "B5 - Ground Floor",

      date: "08th February, 2025 ",
      time: "1:00 PM",
      contact: [
        {
          name: "Agrim Mishra ",
          number: "9369236427",
        },
        {
          name: "Abhinav Pratap Singh",
          number: "6386787023",
        },
        {
          name: "Isha Singh",
          number: "9305139337",
        },
      ]
    },
    {
      title: "Recall-O-Tune",
      img: "./assets/events/recall-o-tune.ab949ae3af0b07261934.png",
      discription:"Challenge your memory and reasoning skills in this exciting event filled with funand intellectual puzzles!. Participants will identify logos (University, company, or government organization) and solve puzzles digitally in the shortest possibletime.",
      category: "School / University ",
      individual :"50",
register:"https://docs.google.com/forms/d/e/1FAIpQLSfRpaXI_dFCKPMX4l1UVrY5Mff0Q_4qOicbQg8zjyOIBQGZiw/viewform",
     
      prize: [
        "Prize Money and Exciting Rewards for the winners.",
        "Winners will be enlisted in the Hall of Fame of SRMU's Innovation Hub.",
        "Participation Certificates from IEEE and CIIE for all participants."
      ],

      rules: [
        "Participants must not use any external aids or devices to assist in the identification process.",
"The decision of the organizers will be final and binding.",
"The event format and rules are subject to change by the organizers.",
"Misbehavior or misconduct will result in disqualification.",
"Valid college ID or proof of identity is required.",
"Participants must report 30 minutes before the event at the reporting desk."
 ],
      location: "B1-207 , B2-007",

      date: "06th February, 2025 (For School Participant) and 08th February, 2025 (For University Participant) ",
      time: "1:30 PM (For School Participant) and 2:24 PM (For University Participant)",
      contact: [
        {
          name: "Aayush Baranawal",
          number: "7985534101",
        },
        {
          name: "Kritagya Bhagat",
          number: "9142197242",
        },
        {
          name: "Vinay Yadav",
          number: "8765072315",
        },
      ]
    },
    {
      title: "Rubik's Cube",
      img: "./assets/events/rubics cube.e7bd524bfc7ea6cb92d1.png",
      discription:"Cubing Clash is a thrilling event for puzzle enthusiasts, problem solvers, and speed cubers of all skill levels. Highlights include a speed cubing competition, creative challenges, and learning sessions with expert cubers.",
      category: "School / University ",
      individual :"50",

     register:"https://docs.google.com/forms/d/e/1FAIpQLSe_kaVqe0ANap8yIQtpR1nVVGcEJdoHBzM3DGnaOdCH3mMGZg/viewform",
      prize: [
        "Prize Money and Exciting Rewards for the winners.",
        "Winners will be enlisted in the Hall of Fame of SRMU's Innovation Hub.",
        "Participation Certificates from IEEE and CIIE for all participants."
      ],

      rules: [
       " The event is open to all school-level participants, who must register before the event starts.",
"Only standard 3x3 Rubik's Cubes are allowed",
"Participants must not use tampered cubes.",
"The competition will have multiple rounds, with the fastest solve time in each round determining the rank.",
"Timing starts as soon as the cube is touched, with a maximum of 10 seconds allowed for inspection before solving.",
"Winners are selected based on solve time, and ties will be resolved with an additional round.",
"Disqualification will occur for tampered cubes or rule violations."
 ],
      location: "Admin Ground",

      date: "06th February, 2025 (For School Participant and University Participant) ",
      time: "2:00 PM (For School Participant) and 1:20 PM (For University Participant)",
      contact: [
        {
          name: "Aadi Chandra ",
          number: "9335402749",
        },
        {
          name: "Sabhyata Singh",
          number: "6394535041",
        },
        {
          name: "Rashi Malik",
          number: "8707340147",
        },
      ]
    },
    {
      title: "Buddhi क्षमता",
      img: "./assets/events/Buddhi SHAMTA.720ebf5c74bbad455593.png",
      discription:"Buddhi क्षमता is a fun event that tests students’ memory skills through four exciting levels. First , participants match card pairs by remembering their positions. Second,they pair bottles with their correct colors. The third level involves memorizing and recreating object patterns. Finally, participants identify objects out of options by their names and colors.",
      category: "School / University ",
      individual :"50",
register:"https://docs.google.com/forms/d/e/1FAIpQLSdedAQ02ik7j8hYl4uv0Vo-v_hVVpfxNmzIJhufCofE1Wh2PA/viewform",
     
      prize: [
        "Prize Money and Exciting Rewards for the winners.",
        "Winners will be enlisted in the Hall of Fame of SRMU's Innovation Hub.",
        "Participation Certificates from IEEE and CIIE for all participants."
      ],

      rules: [
        "Eligibility : Open to all schools.",
        "Fair Play: Participants must complete all tasks independently without external help.",
        "Time Limit: Each level has a strict time limit to maintain fairness.",
       " Reporting: Arrive at least 30 minutes before the event begins.",
        "Misconduct: Any form of misbehavior or misconduct will result in disqualification.",
       " Identity Card or Any proof of Id: Please carry your identity card or any proof of Id with yourself."
 ],
      location: "B1-First Floor",

      date: "06th February, 2025 (For School Participant and University Participant) ",
      time: "1:00 PM (For School Participant) and 2:05 PM (For University Participant)",
      contact: [
        {
          name: "Nandini Verma",
          number: "7773909160",
        },
        {
          name: "Aradhya Gupta",
          number: "7355344502",
        },
        {
          name: "Dhruv Pathak",
          number: "8604440669",
        },
      ]
    },
    {
      title: "Reasoning Rumble",
      img: "./assets/events/reasoning rumble.185c85b7a4c652e717ea.png",
      discription:"Get ready for Reasoning Rumble, a thrilling challenge of reasoning, aptitude, and logic! Test your skills with puzzles like dice face challenges, distance calculations, ratios, and pattern recognition, all designed to push your mental agility to the limits. Perfect for puzzle enthusiasts and analytical minds, this event is your chance to shine, have fun, and compete for the title of Ultimate Logic Champion!",
      category: "School / University ",
      individual :"50",
register:"https://docs.google.com/forms/d/e/1FAIpQLSdCAs1yLabxE50hed9v7QGFYuwuDABt4AhGpEBlRpzAzCnCbw/viewform",
     
      prize: [
        "Prize Money and Exciting Rewards for the winners.",
        "Winners will be enlisted in the Hall of Fame of SRMU's Innovation Hub.",
        "Participation Certificates from IEEE and CIIE for all participants."
      ],

      rules: [
"        Participants must complete all tasks independently without external help.",
"Each level will have a strict time limit that must be followed.",
"All participants must report to the venue at least 30 minutes before the event starts; latecomers will be disqualified.",
"Any form of misbehaviour or misconduct will lead to immediate disqualification.",
"The use of electronic devices, including calculators and mobile phones, is strictly prohibited during the event."
 ],
      location: "B1-Second Floor (For School Students) and B2 - Second Floor (For University Students)",

      date: "06th February, 2025 (For School Participant and University Participant) ",
      time: "3:25 PM (For School Participant) and 2:50 PM (For University Participant)",
      contact: [
        {
          name: "Priyanshi Srivastava",
          number: "8687968902",
        },
        {
          name: "Aditya Tiwari",
          number: "8303164785",
        },
        {
          name: "Shiva Sharma",
          number: "8273729965",
        },
      ]
    },
    {
      title: "BGMI",
      img: "./assets/events/bgmi.33be073ceb62e6b8d371.png",
      discription:"Enter the battlegrounds with your 4-man squad in an intense BGMI tournament. Compete in a 64-player lobby, starting with a 2-map group stage featuring an Erangel-Livik combo. Top teams from the Classic Maps will face off in ARENA TDM (4v4, 1v1, 2v2, or 3v3) based on qualifications",
      category: "University Only",
      group :"200",
      groupMembers:"4",
      register:"https://docs.google.com/forms/d/e/1FAIpQLScoc2Ps14RxFXQ8aZ1FceSCe-d5K_bKk-pNQ5OThZ5gzFNv4Q/viewform",
      prize: [
        "Prize Money and Exciting Rewards for the winners.",
        "Winners will be enlisted in the Hall of Fame of SRMU's Innovation Hub.",
        "Participation Certificates from IEEE and CIIE for all participants."
      ],

      rules: [
        "Only Android/iOS devices are allowed; no tablets.",
        "Organizers are not responsible for participants’ connectivity issues.",
"Participants must be ready 15 minutes before the match. Late entries are not allowed.",
       "IDs and passwords will be provided 10 minutes before the game.",
        "Fair play is strictly enforced—cheating tools or bug exploitation will result in disqualification.",
        "No entry fee refunds.",
        "In case of a tie, the team with the highest number of kills will advance."
 ],
      location: "Online & B2-305 for Finals Only",

      date: "07th February , 2025",
      time: "To be revealed soon!",
      contact: [
        {
          name: "Santosh Pandey",
          number: "9580336086",
        },
        {
          name: "Dhruv Pathak",
          number: "xxxxxxx85",
        },
        {
          name: "Pratham Mishra",
          number: "xxxxxx9965",
        },
      ]
    },
    {
      title: "Free Fire",
      img: "./assets/events/freefire.72c3d59e4ce95b5a41ed.png",
      discription:"Compete in a high-octane Free Fire tournament featuring 4-man squads in a 48-player lobby. Battle across three iconic maps—Bermuda, Purgatory, and Kalahari—in the group stage, with top runners-up advancing to the Clash Squad final on classic maps.",
      category: "School / University",
      group :"150",
      register:"https://docs.google.com/forms/d/e/1FAIpQLSdUo_TQINm6GQFLR5GMOOCGmOlhyoevXLNU475Dcsm3SeiSkA/viewform",
      groupMembers:"4",
      prize: [
        "Prize Money and Exciting Rewards for the winners.",
        "Winners will be enlisted in the Hall of Fame of SRMU's Innovation Hub.",
        "Participation Certificates from IEEE and CIIE for all participants."
      ],

      rules: [
        "Failure to join the room on time results in 0 points.",
"No gun skins or properties are allowed.",
"Any use of unfair means (e.g., aimbot, trigger bot, ESP) will lead to disqualification.",
"League matches will be played online.",
"All the teams are required to record POV of atleast 5 minutes while playing the game",
"If any teams fails to provide POV would be directly disqualified",
"Each member of every team should record their POV"
 ],
      location: "B2 - 305 (Only for Finals)",

      date: "06th February , 2025",
      time: "To be revealed soon!",
      contact: [
        {
          name: "Jay Kushwaha",
          number: "7376670178",
        },
        {
          name: "Ayush Yadav",
          number: "7084297850",
        },
        {
          name: "Mohd Tabish Khan",
          number: "95194931113",
        },
      ]
    },
  ];

  const handleClick = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // Optional: for smooth scrolling
      });
      console.log("hello")
    }
  
    useEffect(() => {
       handleClick();
       
    }, [])

  const [index, setindex] = useState(useParams().eventId);


return (
    <main className="mt-30 flex flex-col h-screen max-md:h-fit gap-4 items-center p-4">
      <div className=" w-full">
        <h1 className="text-7xl w-fit border-r-4 pr-2 border-viveka-theme ">
          {events[index].title}
        </h1>
      </div>
      
      <div className="h-[75%] max-md:h-fit flex w-full gap-10 items-center   text-white max-md:flex-col  bg-viveka-back-light rounded-xl p-8 max-md:p-4">
        <div className=" flex-1 bg-red-500 h-full rounded-xl overflow-hidden">
          <img src={events[index].img} alt="image" />
        </div>

        <div className="flex-2 h-full  flex gap-8 flex-col items-end">
        <div className=" flex flex-col gap-6 w-full  bg-[#172136] overflow-scroll h-full rounded-xl p-4">
          <div className="flex flex-col gap-2 tracking-wide">
          <h1 className="text-3xl tracking-wide w-fit pr-2 border-r-2 border-viveka-theme">Discription</h1>
          <p className="text-gray-400 text-xl">{events[index].discription}</p>

          </div>

          <div className="flex flex-col gap-2 tracking-wide">
          <h1 className="text-3xl tracking-wide w-fit pr-2 border-r-2 border-viveka-theme">Category</h1>
          <p className="text-gray-400 text-xl">{events[index].category}</p>

          </div>

          <div className="flex flex-col gap-2 tracking-wide">
          <h1 className="text-3xl tracking-wide w-fit pr-2 border-r-2 border-viveka-theme">Team</h1>
          { events[index].individual && <p className="text-gray-400 text-xl">Individual - <strong>₹{events[index].individual}</strong></p>}
          { events[index].duo && <p className="text-gray-400 text-xl">Duo - <strong>₹{events[index].individual}</strong></p> }
          { events[index].couple && <p className="text-gray-400 text-xl">Couple - <strong>₹{events[index].couple}</strong></p> }
          
          { events[index].group && <p className="text-gray-400 text-xl">Group - <strong>₹{events[index].group}</strong> ( max {events[index].groupMembers} members )</p> }
          { events[index].team && <p className="text-gray-400 text-xl">Team - <strong>₹{events[index].team}</strong> ( max {events[index].groupMembers} members )</p> }
                    </div>
          

                    <div className="flex flex-col gap-2 tracking-wide">
          <h1 className="text-3xl tracking-wide w-fit pr-2 border-r-2 border-viveka-theme">Prize</h1>
          {events[index].prize ? <ul className="text-gray-400 text-xl list-disc p-6 ">
              
              { events[index].prize.map((el,ind)=>{
                return <li key={ind}>{el}</li>
})}
             
           </ul> :<p className="text-gray-400 text-xl list-disc  ">To be Revealed soon!</p>}
          </div>

        <div className="flex flex-col gap-2 tracking-wide">
          <h1 className="text-3xl tracking-wide w-fit pr-2 border-r-2 border-viveka-theme">Rules and Regulations</h1>
          
         {events[index].rules ? <ul className="text-gray-400 text-xl list-disc p-6 ">
              
               { events[index].rules.map((el,ind)=>{
                 return <li key={ind}>{el}</li>
})}
              
            </ul> :<p className="text-gray-400 text-xl list-disc  ">To be Revealed soon!</p>}
          

          </div>

          <div className="flex flex-col gap-2 tracking-wide">
          <h1 className="text-3xl tracking-wide w-fit pr-2 border-r-2 border-viveka-theme">Location</h1>
          {<p className="text-gray-400 text-xl">{events[index].location}</p>}

          </div>

          <div className="flex max-md:flex-col max-md:gap-6 gap-24 tracking-wide">
            <div>
          <h1 className="text-3xl tracking-wide w-fit pr-2 border-r-2 border-viveka-theme">Date</h1>
          {<p className="text-gray-400 text-xl">{events[index].date}</p>}
          </div>

          <div>
          <h1 className="text-3xl tracking-wide w-fit pr-2 border-r-2 border-viveka-theme">Time</h1>
          {<p className="text-gray-400 text-xl">{events[index].time}</p>}
          </div>

          </div>

          <div className="flex flex-col gap-2 tracking-wide">
          <h1 className="text-3xl tracking-wide w-fit pr-2 border-r-2 border-viveka-theme">Contact</h1>
          {
            events[index].contact.map((el,ind)=>{
              return <p key={ind} className="text-gray-400 text-xl">{el.name} - {el.number}</p>
              
            })
          }
          </div>

        </div>

        <div className="max-md:mb-6" >
        <a className="bg-viveka-theme px-20 py-2 tracking-wide cursor-pointer hover:text-viveka-back-light transition-all duration-200 rounded-xl text-2xl" href={events[index].register} target="blank">Register</a>
      </div>
        </div>


      </div>
      <div>
      
      </div>
      
      
    </main>
  );
};

export default EventInside;
