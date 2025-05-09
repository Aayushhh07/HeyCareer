document.body.title = "Inbox 133 - contact@heycareer.in"
const indianNames = [
    "Varun Kumar",
    "Isha Singh",
    "Riya Sharma",
    "Aditi Gupta",
    "Arya Patel",
    "Zoya Khan",
    "Pooja Mishra",
    "Nisha Tiwari",
    "Ruchika Verma",
    "Krishna Yadav",
    "Bhavya Choudhary",
    "Sakshi Rathore",
    "Aishwarya Sharma",
    "Mehak Kapoor",
    "Suman Verma",
    "Aarav Kumar",
    "Gaurav Singh",
    "Deepak Yadav",
    "Sneha Sharma",
    "Rohit Verma",
    "Anushka Gupta",
    "Anika Singh",
    "Neha Sharma",
    "Ananya Yadav",
    "Tanvi Patel",
    "Ujjwal Kumar",
    "Chetan Singh",
    "Ayush Tiwari",
    "Shivani Singh",
    "Disha Verma",
    "Vidya Sharma",
    "Arjun Singh",
    "Amrita Gupta",
    "Advait Verma",
    "Kavya Yadav",
    "Sameer Kumar",
    "Yash Singh",
    "Akshay Verma",
    "Pranav Tiwari",
    "Aarushi Gupta",
    "Rahul Singh",
    "Priya Sharma",
    "Sushant Verma",
    "Ankit Kumar",
    "Divya Singh",
    "Omkar Singh",
    "Vikas Yadav",
    "Ravi Kumar",
    "Rani Sharma",
    "Nitin Verma",
    "Manoj Singh",
    "Anuradha Gupta",
    "Lalita Singh",
    "Sanjay Verma",
    "Abhishek Kumar",
    "Rekha Gupta",
    "Sarita Sharma",
    "Rajesh Singh",
    "Madhuri Gupta",
    "Rajeev Singh",
    "Rajendra Yadav",
    "Vijay Kumar",
    "Sushma Verma",
    "Amit Kumar",
    "Rajiv Singh",
    "Manish Kumar",
    "Rashmi Sharma",
    "Vinod Yadav",
    "Rajkumar Singh",
    "Kamlesh Kumar",
    "Ramesh Yadav",
    "Harish Kumar",
    "Meenakshi Gupta",
    "Shubham Singh",
    "Vijay Kumar",
    "Suresh Yadav",
    "Sunita Sharma",
    "Jyoti Singh",
    "Kusum Verma",
    "Rakesh Kumar",
    "Rajani Gupta",
    "Geeta Singh",
    "Neelam Verma",
    "Anil Kumar",
    "Naveen Singh",
    "Manju Gupta",
    "Santosh Kumar",
    "Pramod Kumar",
    "Kamal Singh",
    "Satish Yadav",
    "Sanjay Kumar"
  ];
  const careerCounselingJobApplicationStarters = [
    "Subject: Application for Career Counseling Position...",
    "Dear Hiring Team at Hey Career...",
    "I hope this message finds you well. I am writing to express my strong interest in the Career Counseling position advertised on your website...",
    "As a dedicated and experienced career counselor, I am excited about the opportunity to join the Hey Career team and contribute to your mission of helping individuals make informed career choices...",
    "With a background in counseling and a passion for guiding individuals toward fulfilling careers, I believe I am well-suited for this role. My expertise in assessing individuals' strengths and interests, along with my ability to provide personalized career guidance, aligns perfectly with Hey Career's mission...",
    "I have attached my resume for your review, which outlines my qualifications, including my relevant experience/education/certifications. I am confident that my skills and enthusiasm make me a strong candidate for this position...",
    "I would welcome the chance to further discuss how my background and expertise can contribute to Hey Career's continued success in empowering individuals to achieve their career goals...",
    "Thank you for considering my application. I look forward to the opportunity to speak with you in more detail about how I can be an asset to your team...",
    "Sincerely...",
    "HeyCareer...",
    "contact@heycareer.in...",
    "Subject: Career Counselor Application...",
    "Dear Hey Career Hiring Team...",
    "I am writing to apply for the Career Counselor position at Hey Career, as advertised on your website. Your organization's commitment to helping individuals make informed career decisions resonates with my professional values...",
    "In my previous role as a career counselor at mere mentor, I successfully guided clients toward achieving their career aspirations. I am passionate about assisting individuals in identifying their strengths and interests, setting achievable goals, and providing them with the necessary tools to succeed in their chosen paths...",
    "Attached, you will find my resume, which provides a comprehensive overview of my qualifications, including my relevant qualifications/experience. I am eager to discuss how my skills align with Hey Career's mission and vision...",
    "I look forward to the possibility of contributing to your team and making a positive impact on the lives of your clients. Please feel free to contact me to schedule an interview...",
    "Best regards..."
    // Continue adding more lines as needed, each ending with "..."
  ];
  const pdfCVFileNames = [
    "resume_1.pdf",
    "cv_2.pdf",
    "job_application_3.pdf",
    "profile_4.pdf",
    "cv_document_5.pdf",
    "resume_sample_6.pdf",
    "application_form_7.pdf",
    "professional_cv_8.pdf",
    "job_resume_9.pdf",
    "cv_example_10.pdf",
    "resume_template_11.pdf",
    "applicant_cv_12.pdf",
    "career_profile_13.pdf",
    "cv_format_14.pdf",
    "jobseeker_resume_15.pdf",
    "cv_template_16.pdf",
    "job_applicant_cv_17.pdf",
    "resume_format_18.pdf",
    "application_cv_19.pdf",
    "job_hunter_resume_20.pdf",
    // Add more generic file names as needed
  ];
  document.getElementsByTagName("tbody")[4].innerHTML ="";
for (naam of indianNames) {
    let tit = careerCounselingJobApplicationStarters[Math.floor(Math.random()*(careerCounselingJobApplicationStarters.length-1))]
    let filename = pdfCVFileNames[Math.floor(Math.random()*(pdfCVFileNames.length-1))]
    let innerH = `<tr class="zA zE byw" jscontroller="ZdOxDb" jsaction="Tnvr6c:RNc9jf;PG1zDd:eyrEaf;WGbBt:UL4Ddb;nVvxM:UL4Ddb;" jsmodel="nXDxbd" id=":gb" tabindex="-1" role="row" aria-labelledby=":gc" draggable="false" jslog="18406; u014N:xr6bB,SYhH9d; 1:WyIjdGhyZWFkLWY6MTc2OTAzNjcxNjYyMTk0MDYwMCIsMSxudWxsLG51bGwsbnVsbCwwLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsW11d"><td class="PF xY"></td><td id=":gd" class="oZ-x3 xY" style="" data-tooltip="Select"><div id=":ge" class="oZ-jc T-Jo J-J5-Ji " role="checkbox" aria-labelledby=":gc" dir="ltr" aria-checked="false" tabindex="-1"><div class="T-Jo-auh"></div></div></td><td class="apU xY"><span id=":gf" class="aXw T-KT" aria-label="Not starred" role="button" data-tooltip="Not starred"><img class="T-KT-JX" src="images/cleardot.gif" alt="Not starred"></span></td><td class="yX xY " role="gridcell" tabindex="-1"><div id=":gc" class="afn">unread, <span class="bA4"><span translate="no" class="zF" email="dean.academics@ietlucknow.ac.in" name="${naam}" data-hovercard-id="dean.academics@ietlucknow.ac.in">${naam}</span></span>, <span class="bqe" data-thread-id="#thread-f:1769036716621940600" data-legacy-thread-id="188ce18560dfc778" data-legacy-last-message-id="188ce18560dfc778" data-legacy-last-non-draft-message-id="188ce18560dfc778">${tit}</span>, has attachment, <span class="bq3">Sep 3</span>, ---------- Forwarded message --------- From: Dr. Amitesh Kumar &lt;amitesh.ee@nitp.ac.in&gt; Date: Sun, 18 Jun, 2023, 3:03 pm Subject: Last date: 19-06-2023- NIT Patna offers 6-Days Hybrid mode (.</div><div id=":gg" class="yW"><span class="bA4"><span translate="no" class="zF" email="dean.academics@ietlucknow.ac.in" name="${naam}" data-hovercard-id="dean.academics@ietlucknow.ac.in" data-hovercard-owner-id="120">${naam}</span></span></div></td><td id=":gh" tabindex="-1" class="xY a4W" role="gridcell"><div class="xS" role="link"><div class="xT"><div class="y6"><span id=":gj" class="bog"><span class="bqe" data-thread-id="#thread-f:1769036716621940600" data-legacy-thread-id="188ce18560dfc778" data-legacy-last-message-id="188ce18560dfc778" data-legacy-last-non-draft-message-id="188ce18560dfc778">${tit}</span></span></div><span id=":gk" class="y2"><span class="Zt">&nbsp;-&nbsp;</span>---------- Forwarded message --------- From: Dr. Amitesh Kumar &lt;amitesh.ee@nitp.ac.in&gt; Date: Sun, 18 Jun, 2023, 3:03 pm Subject: Last date: 19-06-2023- NIT Patna offers 6-Days Hybrid mode (</span></div></div><div id=":gl" class="brd" jscontroller="tnECjd" jsaction="kZCq9d:sqHGIc;"><div class="brc  " data-index="0" tabindex="0" title="${filename}" aria-disabled="false" data-chipenabled="true" jsaction="lkS8Jd" jsname="DMMSG" jslog="117040; u014N:xr6bB,cOuCgd,Kr2w4b; 1:WyIjdGhyZWFkLWY6MTc2OTAzNjcxNjYyMTk0MDYwMCIsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsW11d"><span class="bzB">Attachment:</span><img class="brf" aria-hidden="true" src="//ssl.gstatic.com/docs/doclist/images/mediatype/icon_3_pdf_x16.png" srcset="//ssl.gstatic.com/docs/doclist/images/mediatype/icon_3_pdf_x32.png 2x"><span class="brg">${filename}</span></div></div></td><td class="byZ xY" role="gridcell" tabindex="-1"></td><td class="yf xY "><img class="yE" src="images/cleardot.gif" title="Has attachment" alt="Has attachment"></td><td class="xW xY " role="gridcell" tabindex="-1"><span title="Sun, Sep 3, 2023, 4:11 PM" id=":gm" aria-label="Sun, Sep 6, 2023, 4:11 PM"><span class="bq3">Sep 6</span></span></td><td class="bq4 xY"><ul class="bqY" id=":gn" role="toolbar"><li class="bqX brq" data-tooltip="Archive" jsaction="JqEhuc" jscontroller="pk1i4d" jslog="20281; u014N:xr6bB; 1:WyIjdGhyZWFkLWY6MTc2OTAzNjcxNjYyMTk0MDYwMCIsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsW11d"></li><li class="bqX bru" data-tooltip="Delete" jsaction="zM6fo" jscontroller="pmCKac" jslog="20283; u014N:xr6bB; 1:WyIjdGhyZWFkLWY6MTc2OTAzNjcxNjYyMTk0MDYwMCIsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsW11d"></li><li class="bqX brr" data-tooltip="Mark as read" jsaction="aUd46b" jscontroller="VtSflc" jslog="25471; u014N:xr6bB; 1:WyIjdGhyZWFkLWY6MTc2OTAzNjcxNjYyMTk0MDYwMCIsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsW11d"></li><li class="bqX brv" data-tooltip="Snooze" jsaction="u4Fnue" jscontroller="PKSrle" jslog="20285; u014N:xr6bB; 1:WyIjdGhyZWFkLWY6MTc2OTAzNjcxNjYyMTk0MDYwMCIsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsW11d"></li></ul></td><td class="xY"></td></tr>`
    document.getElementsByTagName("tbody")[4].innerHTML += innerH;
}