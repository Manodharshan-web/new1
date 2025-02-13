function checkAnswers() {
    let q1 = document.getElementById("q1").value.toLowerCase().trim();
    let q2 = document.getElementById("q2").value.trim();
    let q3 = document.getElementById("q3").value.toLowerCase().trim();
    let q4 = document.getElementById("q4").value.toLowerCase().trim();
    let q5 = document.getElementById("q5").value.trim();

    // Correct Answers
    let correctAnswers = {
        q1: ["star"],  
        q2: ["4"],     
        q3: ["ma"],    
        q4: ["ya"],    
        q5: ["2020"]   
    };

    // Check if all answers are correct
    let isCorrect =
        correctAnswers.q1.includes(q1) &&
        correctAnswers.q2.includes(q2) &&
        correctAnswers.q3.includes(q3) &&
        correctAnswers.q4.includes(q4) &&
        correctAnswers.q5.includes(q5);

    if (isCorrect) {
        alert("Congratulations! 🎉 The secret password is: maya2020 💖");
        document.getElementById("quiz").classList.add("hidden");
        document.getElementById("passwordSection").classList.remove("hidden");
    } else {
        alert("Oops! Some answers are incorrect. Try again! ❤️");
    }
}

function checkPassword() {
    let passwordInput = document.getElementById("passwordInput").value.trim();
    let correctPassword = "maya2020"; // Correct password

    if (passwordInput === correctPassword) {
        document.getElementById("passwordSection").classList.add("hidden");
        document.getElementById("messageBox").classList.remove("hidden");
        document.getElementById("valentineMessage").innerHTML = `
            <strong>💌 To My Love, My Heartbeat 💌</strong><br><br>
            My dearest Poonakutty, ❤️✨<br><br>
            Happy Valentine's day di pooonakuttyyyyyy ❤️🥰...

Thanks for being everything for me as a Mother , Friend , Wife and everything di💋🥰...I want you to be my valentine forever di🤌..!! Yellaa valentine's day um unkooda naan irukanum nu romba aasa padren💭😌...Unna yepovu yaarukaagavum vitu kudukamaaten di promise ❤️💋.. Unna ipolaam romba kasta paduthitry irukrathuku romba sorry di adhelaam pannaama iruka yennaala mudinjathayu meeruna efforts potu unna hurt pannaama paathukren diii 💯❤️ 

Yenna romba blessed ah✨ , special aah🫠 feel panna vachathu nee thaan bbe...so unnayu andha maari feel panna vaipen muuu❤️😌...un kutty payan unakaaga enna venaalum pannuven muuu ❤️💯💋💋

And last aah I neeed a deeep huggiiieeee dii seeekro chat ku odi vandhu kudu diii🤌🤌🤌!!!!

Happiieeeee Valentine's Day diiiiiiiiiiiii sandakaaariiiiii💋❤️✨<br>
            <em>Your Rowdy ❤️🔥</em>
        `;
    } else {
        alert("Wrong password! Try again, my love! 💕");
    }
}
