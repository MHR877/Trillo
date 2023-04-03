const iconBoxChat = document.querySelector(".user-nav__icon-box-chat");
const userDropdownChat = document.querySelector(".user-dropdown__chat");

const iconBoxBookmark = document.querySelector(".user-nav__icon-box-bookmark");
const userDropdownBookmarks = document.querySelector(".user-dropdown__bookmarks");

const userNavUser = document.querySelector(".user-nav__user");
const userDropdownProfile = document.querySelector(".user-dropdown__profile");

iconBoxChat.addEventListener("click" , () => {
    userDropdownChat.classList.toggle("display")
})

iconBoxBookmark.addEventListener("click" , () => {
    userDropdownBookmarks.classList.toggle("display")
})

userNavUser.addEventListener("click" , () => {
    userDropdownProfile.classList.toggle("display")
})

document.addEventListener('click', function(event) {
    if (!event.target.closest('.user-nav__icon-box-chat') && !event.target.closest(".user-dropdown__chat")) {
        userDropdownChat.classList.remove('display');
    }
    if (!event.target.closest('.user-nav__icon-box-bookmark') && !event.target.closest(".user-dropdown__bookmarks")) {
        userDropdownBookmarks.classList.remove('display');
    }
    if (!event.target.closest('.user-nav__user') && !event.target.closest(".user-dropdown__profile")) {
        userDropdownProfile.classList.remove('display');
    }
});
