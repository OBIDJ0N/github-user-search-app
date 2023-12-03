"use strict";
const modSwitcher = document.querySelector(".mode_switcher"),
    search = document.querySelector(".search"),
    searchInpt = document.querySelector("#search_users"),
    noResult = document.querySelector(".no_result-text"),
    searchBtn = document.querySelector(".search_btn");
let about_user = document.querySelectorAll(".about_user");

modSwitcher.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

searchBtn.addEventListener("click", () => {
    const api = `https://api.github.com/users/${searchInpt.value}`;
    fetch(api)
        .then((res) => res.json())
        .then((data) => {
            update(data);
        })
        .catch(() => {
            errors();
        });
});

function update(data) {
    clearContent();
    about_user.forEach((element) => {
        let githubAvatar = element.querySelector(".left_items img");
        let githubName = element.querySelector(".github_name");
        let githubDate = element.querySelector(".github_date");
        let githubUsername = element.querySelector(".github_username");
        let githubBio = element.querySelector(".github_bio");
        let reposNumber = element.querySelector(".repos_number");
        let followersNumber = element.querySelector(".followers_number");
        let followingNumber = element.querySelector(".following_number");
        let accountLocation = element.querySelector(".account_location-name");
        let accountTwitter = element.querySelector(".account_twitter-username");
        let accountLink = element.querySelector(".account_link");
        let accountOffice = element.querySelector(".account_office-name");

        data.avatar_url === undefined ? false : (githubAvatar.src = data.avatar_url);
        data.name === null
            ? (githubName.innerHTML = "No name")
            : (githubName.innerHTML = data.name);
        const date = new Date(data.created_at);
        const monthNames = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ];
        const day = date.getUTCDate();
        const month = monthNames[date.getUTCMonth()];
        const year = date.getUTCFullYear();
        githubDate.innerHTML = `Joined ${day} ${month} ${year}`;
        githubUsername.innerHTML = `@${data.login}`;
        data.bio === null
            ? (githubBio.innerHTML = "This profile has no bio")
            : (githubBio.innerHTML = data.bio);
        reposNumber.innerHTML = data.public_repos;
        followersNumber.innerHTML = data.followers;
        followingNumber.innerHTML = data.following;
        data.location === null
            ? (accountLocation.innerHTML = "No location")
            : (accountLocation.innerHTML = data.location);
        data.twitter_username === null
            ? (accountTwitter.innerHTML = "Not Available")
            : (accountTwitter.innerHTML = data.twitter_username);
        accountLink.innerHTML === null
            ? (accountLink.innerHTML = "https://github.blog")
            : (accountLink.innerHTML = `${data.blog.slice(0, 15)}...`);
        accountLink.addEventListener("click", () => {
            location.href = data.blog;
        });
        data.company === null
            ? (accountOffice.innerHTML = "No office")
            : (accountOffice.innerHTML = data.company);
    });
}
function errors() {
    noResult.innerHTML = `No results`;
    about_user.forEach((element) => {
        let githubAvatar = element.querySelector(".left_items img");
        let githubName = element.querySelector(".github_name");
        let githubDate = element.querySelector(".github_date");
        let githubUsername = element.querySelector(".github_username");
        let githubBio = element.querySelector(".github_bio");
        let reposNumber = element.querySelector(".repos_number");
        let followersNumber = element.querySelector(".followers_number");
        let followingNumber = element.querySelector(".following_number");
        let accountLocation = element.querySelector(".account_location-name");
        let accountTwitter = element.querySelector(".account_twitter-username");
        let accountLink = element.querySelector(".account_link");
        let accountOffice = element.querySelector(".account_office-name");

        githubName.innerHTML = "The Octocat";
        githubDate.innerHTML = "Joined 25 Jan 2011";
        githubUsername.innerHTML = "@octocat";
        githubBio.innerHTML =
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.";
        reposNumber.innerHTML = "8";
        followersNumber.innerHTML = "3938";
        followingNumber.innerHTML = "9";
        accountLocation.innerHTML = "San Francisco";
        accountTwitter.innerHTML = "Not Available";
        accountLink.innerHTML = "https://github.blog";
        accountOffice.innerHTML = "@github";
        githubAvatar.src = "./images/avatar_git.svg";
    });

}
function clearContent() {
    noResult.innerHTML = "";
    about_user.forEach((element) => {
        let githubName = element.querySelector(".github_name");
        let githubDate = element.querySelector(".github_date");
        let githubUsername = element.querySelector(".github_username");
        let githubBio = element.querySelector(".github_bio");
        let reposNumber = element.querySelector(".repos_number");
        let followersNumber = element.querySelector(".followers_number");
        let followingNumber = element.querySelector(".following_number");
        let accountLocation = element.querySelector(".account_location-name");
        let accountTwitter = element.querySelector(".account_twitter-username");
        let accountLink = element.querySelector(".account_link");
        let accountOffice = element.querySelector(".account_office-name");

        githubName.innerHTML = "";
        githubDate.innerHTML = "";
        githubUsername.innerHTML = "";
        githubBio.innerHTML = "";
        reposNumber.innerHTML = "";
        followersNumber.innerHTML = "";
        followingNumber.innerHTML = "";
        accountLocation.innerHTML = "";
        accountTwitter.innerHTML = "";
        accountLink.innerHTML = "";
        accountOffice.innerHTML = "";
    });

}
