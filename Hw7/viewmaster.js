
document.addEventListener("DOMContentLoaded", () => {
    const images = [
        {
            title: "Stonewall Inn",
            image: "images/stonewall.png",
            description: "A group gathered in front of Stonewall in New York on June 28, 1969",
            author: "Fred W. McDarrah",
            year: "1969",
        },
        {
            title: "Sydney Mardi Gras",
            image: "images/mardigras.png",
            description: "The first Sydney Mardi Gras in 1978 was held on the one-year anniversary of the Stonewall riots in New York.",
            author: "Sallie Colechin",
            year: "1978",
        },
        {
            title: "Taiwan Marriage Rights",
            image: "images/taiwan_marriage_equality.png",
            description: "Thousands of gay rights supporters gathered outside the parliament building celebrate after Taiwan's parliament voted to legalize same-sex marriage on May 17, 2019, in Taipei, Taiwan.",
            author: "Carl Court",
            year: "2019",
        },
        {
            title: "Marriage Equality Victory",
            image: "images/marriage_equality.png",
            description: "Supporters of same-sex marriage celebrate outside of the Supreme Court in Washington, on June 26, 2015.",
            author: "Manuel Balce Cenetal",
            year: "2015",
        },
        {
            title: "Argentina Pride Parade",
            image: "images/argentina_trans_rights.png",
            description: "Argentina has some of the world's most progressive laws for transgender rights.",
            author: "Roberto Michel",
            year: "2017",
        },
        {
            title: "First Pride Flag",
            image: "images/pride_flag.png",
            description: "Queer artist Gilbert Baker preserved this 10-foot by 28-foot section of an original 1978 pride flag.",
            author: "Andrew Shaffer",
            year: "2021",
        },
        {
            title: "AIDS Activism",
            image: "images/AIDS_protest.png",
            description: "AIDS activist group ACT UP organized numerous protests on Wall Street in the 1980s. The group's tactics helped speed the process of finding an effective treatment for AIDS.",
            author: "Tim Clary",
            year: "1989",
        },
        {
            title: "Drag Queen Story Hour",
            image: "images/story_hour.png",
            description: "Drag Queens read 'Giraffes Can't Dance' to children in front of Independence Hall.",
            author: "Rob Rabena",
            year: "2023",
        },
        {
            title: "Thailand Legalizes Gay Marriage",
            image: "images/thailand_marriage.png",
            description: "Almost 2,000 same-sex and transgender couples married in Thailand on Thursday, Jan. 23, as the kingdom's equal marriage law went into effect.",
            author: "Lillian Suwanrumpha",
            year: "2025",
        },
        {
            title: "Untitled (Portrait of Ross in L.A.)",
            image: "images/ross.png",
            description: "Felix Gonzalez-Torres produced work of uncompromising beauty and simplicity, transforming the everyday into profound meditations on love and loss. “Untitled” (Portrait of Ross in L.A.) is an allegorical representation of the artist’s partner, Ross Laycock, who died of an AIDS-related illness in 1991. The installation is comprised of 175 pounds of candy, corresponding to Ross’s ideal body weight. Viewers are encouraged to take a piece of candy, and the diminishing amount parallels Ross’s weight loss and suffering prior to his death. Gonzalez-Torres stipulated that the pile should be continuously replenished, thus metaphorically granting perpetual life.",
            author: "mark6mauno",
            year: "2013",
        }
    ];

    const imageElement = document.getElementById("image");
    const titleElement = document.getElementById("title");
    const descriptionElement = document.getElementById("description");
    const authorElement = document.getElementById("author");
    const button = document.getElementById("randomButton");

    function showRandomImage() {
        const randomIndex = Math.floor(Math.random() * images.length);
        const selectedImage = images[randomIndex];
        imageElement.src = selectedImage.image;
        titleElement.textContent = selectedImage.title;
        descriptionElement.textContent = selectedImage.description;
        authorElement.textContent = `${selectedImage.year} - ${selectedImage.author}`;
    }

    button.addEventListener("click", showRandomImage);

    showRandomImage(); // Display an initial random image on load
});
