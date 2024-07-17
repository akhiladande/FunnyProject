document.addEventListener('DOMContentLoaded', () => {
    let countervalue = 0;
    const targetButton = document.getElementById('myButton');
    const increaseButton = document.getElementById('increaseButton');

    increaseButton.addEventListener('click', () => {
        let currentWidth = parseInt(window.getComputedStyle(targetButton).width);
        let currentHeight = parseInt(window.getComputedStyle(targetButton).height);
        let currentFontSize = parseInt(window.getComputedStyle(targetButton).fontSize);
        targetButton.style.width = (currentWidth * 1.1) + 'px';
        targetButton.style.height = (currentHeight * 1.1) + 'px';
        targetButton.style.fontSize = (currentFontSize * 1.1) + 'px';

        countervalue++;
        if (countervalue > 20) {

            const happyContent = document.getElementById('happyContent');
            const abovecontent = document.getElementById('button-container');
            const headingcontent = document.getElementById('headingclass');
            const notext = document.getElementById('notext');
            const yestext = document.getElementById('yestext');

            happyContent.style.display = 'block';
            abovecontent.style.display = 'none';
            headingclass.style.display = 'none';
            notext.style.display = 'block';
            yestext.style.display = 'none';
            //document.body.style.backgroundColor="pink";
            document.body.style.backgroundImage = "url('hearts.jpeg')";
        }
        else {

            const texts = [
                "No",
                "Serious ga na",
                "Baby please",
                "Who do I have other than you",
                "Ego ahh",
                "Please understand",
                "Hey what's your problem?",
                "Are you cheating on me?",
                "I will beat you",
                "I will come to your house",
                "Pleaseeeeee"
            ];
            let currentIndex = countervalue - 1;
            if (currentIndex < texts.length) {
                increaseButton.textContent = texts[currentIndex];
            } else {
                increaseButton.textContent = "Pleaseeeeee";
            }
        }
    });


    increaseButton.click();

});

document.addEventListener('DOMContentLoaded', () => {

    const targetButton = document.getElementById('myButton');

    targetButton.addEventListener('click', () => {
        const happyContent = document.getElementById('happyContent');
        const abovecontent = document.getElementById('button-container');
        const headingcontent = document.getElementById('headingclass');
        const notext = document.getElementById('notext');
        const yestext = document.getElementById('yestext');

        happyContent.style.display = 'block';
        abovecontent.style.display = 'none';
        headingclass.style.display = 'none';
        notext.style.display = 'none';
        yestext.style.display = 'block';
       // document.body.style.backgroundColor="pink";
        document.body.style.backgroundImage = "url('hearts.jpeg')";
       


    });




});


