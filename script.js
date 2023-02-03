const pagePointerContainer = document.querySelector(".pagePointerContainer");
const menuTabsContainer = document.querySelector(".menuTabsContainer");
const homePage = document.querySelector(".homePage");
const menuBar = document.querySelector(".menuBar");
const clickDisplayContainer = document.querySelector(".clickDisplayContainer");
const clickDisplay = document.querySelector(".clickDisplay");

const leftCard = document.querySelector(".leftCard");
const rightCard = document.querySelector(".rightCard");

const musicPlayer = document.querySelector(".musicPlayer");

const arbwrrButton = document.querySelector(".arbwrrButton");

const musicInput = document.querySelector(".musicInput");

// Page Pointer

const photos = document.querySelector(".photos");
const musics = document.querySelector(".musics");
const photosSectionContainer = document.querySelector(
  ".photosSectionContainer"
);

photos.addEventListener("click", () => {
  menuTabsContainer.innerHTML = "";
  photosSectionContainer.innerHTML = "";
  photos.classList.add("borderBottom");
  musics.classList.remove("borderBottom");
  makeTabs();
  showPhotoSection();
  menuTabsContainer.classList.add("overfolw");
  rightSection.classList.remove("addHeightAndOverflow");
  musicPlayer.classList.add("hideMusicPlayer");
  arbwrrButton.classList.add("hideArbwrrButton");
  photosInput.style.display = "block";
  musicInput.style.display = "none";
});

musics.addEventListener("click", () => {
  musics.classList.add("borderBottom");
  photos.classList.remove("borderBottom");
  menuTabsContainer.innerHTML = "";
  photosSectionContainer.innerHTML = "";
  menuTabsContainer.classList.remove("overfolw");
  rightSection.classList.add("addHeightAndOverflow");
  musicPlayer.classList.remove("hideMusicPlayer");
  arbwrrButton.classList.remove("hideArbwrrButton");
  photosInput.style.display = "none";
  musicInput.style.display = "block";
});

const TabsText = [
  { name: "Inspiration", color: "#6475A1" },
  { name: "Trends", color: "#505251" },
  { name: "Creative", color: "#95BE44" },
  { name: "Minimal", color: "#F10188" },
  { name: "Ecommerce", color: "#6B6D7A" },
  { name: "Ideas", color: "#037979" },
  { name: "Mobile", color: "#5F5F5F" },
  { name: "Portfolio", color: "#B99348" },
  { name: "Modern", color: "#577D92" },
  { name: "Romance", color: "#A3B12A" },
  { name: "Best", color: "#5332FD" },
  { name: "Action", color: "#5E5C5D" },
  { name: "Corporate", color: "#F10188" },
  { name: "Layout", color: "#FE9F03" },
  { name: "Minimalist", color: "#577D92" },
  { name: "Design", color: "#F5C000" },
  { name: "Sunset", color: "#68524D" },
  { name: "Aesthetic", color: "#0C95E6" },
  { name: "Night", color: "#352450" },
];

const makeTabs = () => {
  for (let i = 0; i < TabsText.length; i++) {
    const tab = document.createElement("div");
    tab.append(TabsText[i].name);
    tab.style.backgroundColor = TabsText[i].color;
    tab.classList.add("tab", "fontStyle", "white", "cursor");
    menuTabsContainer.append(tab);
    menuTabsContainer.classList.add("overfolw");
  }
};

makeTabs();

let commendBoxId = 0;

const makeClickedCard = (forUploadPhoto, forUserProfile, forCaption) => {
  // back icon

  const backIcon = document.createElement("i");
  backIcon.classList.add(
    "fa-solid",
    "fa-circle-arrow-left",
    "backIcon",
    "cursor"
  );

  backIcon.addEventListener("click", () => {
    leftCard.innerHTML = "";
    rightCard.innerHTML = "";
    clickDisplay.classList.remove("clickDisplayStyleByJS");
    homePage.style.display = "block";
    showPhotoSection();
    indexToSelect = -1;
  });

  // icons
  const holdUp = document.createElement("span");
  holdUp.append("...");
  holdUp.classList.add("holdUp", "clickedIcon");

  const downloadIcon = document.createElement("i");
  downloadIcon.classList.add(
    "fa-solid",
    "fa-arrow-up-from-bracket",
    "clickedIcon"
  );

  const flash = document.createElement("i");
  flash.classList.add("fa-solid", "fa-bolt", "clickedIcon");

  const iconContainer = document.createElement("div");
  iconContainer.classList.add("iconContainer", "cursor");
  iconContainer.append(holdUp, downloadIcon, flash);

  // button

  const saveButton = document.createElement("span");
  saveButton.append("Save");
  saveButton.classList.add("saveButton", "cursor", "fontStyle");

  // icon and button

  const iconAndButton = document.createElement("div");
  iconAndButton.classList.add("iconAndButton");
  iconAndButton.append(iconContainer, saveButton);

  // loveIcon and comment Section

  const loveIcon = document.createElement("i");
  loveIcon.classList.add("fa-brands", "fa-gratipay", "loveIcon", "cursor");

  loveIcon.addEventListener("click", () => {
    if (loveIcon.classList.contains("isLoved")) {
      loveIcon.classList.remove("isLoved");
    } else {
      loveIcon.classList.add("isLoved");
    }
  });

  const commentInput = document.createElement("input");
  commentInput.classList.add("form-control", "fontStyle", "commentInput");
  commentInput.placeholder = "Add a comment";

  let commentBox;
  let commentContainer = document.createElement("div");
  commentContainer.classList.add("commentContainer");

  commentInput.addEventListener("change", (event) => {
    const commentValue = event.target.value;
    const comment = document.createElement("div");
    comment.classList.add("comment");
    comment.append(commentValue);

    const commentedProfilePhoto = document.createElement("img");
    commentedProfilePhoto.classList.add("commentedProfilePhoto");
    commentedProfilePhoto.src = "./download (8).jpg";

    const commentedUserName = document.createElement("span");
    commentedUserName.append("Pyae Phyo Han");
    commentedUserName.classList.add("commentedUserName", "fontStyle");

    const commentedProfilePhotoAndName = document.createElement("div");
    commentedProfilePhotoAndName.append(
      commentedProfilePhoto,
      commentedUserName
    );

    const trashIcon = document.createElement("i");
    trashIcon.classList.add("fa-solid", "fa-trash-can", "trashIcon", "cursor");

    const commentAndtrashIcon = document.createElement("div");
    commentAndtrashIcon.append(comment, trashIcon);
    commentAndtrashIcon.classList.add("commentAndtrashIcon");

    const commentTime = new Date().toLocaleDateString();
    const commentTimeTag = document.createElement("div");
    commentTimeTag.classList.add("commentTimeTag", "fontStyle");
    commentTimeTag.append(commentTime);

    commentBox = document.createElement("div");
    commentBox.classList.add("commentBox");

    commentBox.id = commendBoxId;

    commentBox.append(
      commentedProfilePhotoAndName,
      commentAndtrashIcon,
      commentTimeTag
    );
    commentContainer.append(commentBox);

    trashIcon.addEventListener("click", () => {
      const trashIconOwner = commentAndtrashIcon.parentElement;
      trashIconOwner.remove();
    });

    commentInput.value = "";
    commendBoxId += 1;
  });

  const loveIconAndComment = document.createElement("div");
  loveIconAndComment.append(loveIcon, commentInput);
  loveIconAndComment.classList.add("loveIconAndComment");

  clickDisplay.classList.add("clickDisplayStyleByJS");

  // last append
  leftCard.append(forUploadPhoto, backIcon);
  rightCard.append(
    iconAndButton,
    forUserProfile,
    forCaption,
    loveIconAndComment,
    commentContainer
  );
  homePage.style.display = "none";
  photosSectionContainer.innerHTML = "";
};

const clickDisplayFunction = (forPost) => {
  const clickedId = forPost.id;
  const clickedTag = document.getElementById(clickedId);
  const clickedUploadPhoto = clickedTag.getElementsByTagName("img")[0];
  clickedUploadPhoto.classList.add("clickedUploadPhoto");
  const uploadedCaption = clickedTag.getElementsByTagName("div")[0];
  uploadedCaption.classList.add("uploadedCaption");
  const uploadedUserProfile = clickedTag.getElementsByTagName("div")[1];
  uploadedUserProfile.classList.add("uploadedUserProfile");
  makeClickedCard(clickedUploadPhoto, uploadedUserProfile, uploadedCaption);
};

const displayLoop = (data, appendSection) => {
  for (let j = 0; j < data.length; j++) {
    const uploadPhoto = document.createElement("img");
    uploadPhoto.src = data[j].uploadPhoto;
    uploadPhoto.classList.add("uploadPhoto");

    const caption = document.createElement("div");
    caption.append(data[j].caption);
    caption.classList.add("caption", "fontStyle");

    const userPhoto = document.createElement("img");
    userPhoto.src = data[j].userPhoto;
    userPhoto.classList.add("userPhoto");

    const userName = document.createElement("div");
    userName.append(data[j].userName);
    userName.classList.add("userName", "fontStyle");

    const userProfile = document.createElement("div");
    userProfile.append(userPhoto, userName);
    userProfile.classList.add("userProfile", "cursor");

    const post = document.createElement("div");
    post.append(uploadPhoto, caption, userProfile);
    post.id = data[j].postId;
    post.classList.add("post");

    appendSection.append(post);

    post.addEventListener("click", () => {
      clickDisplayFunction(post);
    });
  }
};

const showPhotoSection = () => {
  // first Section

  const firstSection = document.createElement("div");
  firstSection.classList.add(
    "firstSection",
    "marginBetweenSection",
    "sectionBulid"
  );

  const firstSectionData = [
    {
      uploadPhoto: "./kao komichi.jpg",
      caption: "kao komichi cute moment",
      userPhoto: "./download.jpg",
      userName: "Sakuta",
      postId: 1,
    },
    {
      uploadPhoto: "./9 Best Everything images in 2020.jpg",
      caption: "Studying at home",
      userPhoto: "./sikimorisan.jpg",
      userName: "Shikimori",
      postId: 2,
    },
    {
      uploadPhoto:
        "./Best Fuji San view in Japan_ street in Fujiyoshida (12).jpg",
      caption: "fuji San view in Japan",
      userPhoto:
        "./Somang Han _ Manhwa_ Seasons of Blossom _ Author_ Hongduck _ Artist_ Nemone.jpg",
      userName: "Himari",
      postId: 3,
    },
    {
      uploadPhoto: "./download (5).jpg",
      caption: "Anime School Lunch",
      userPhoto: "./Крашиха.jpg",
      userName: "Yayoi",
      postId: 4,
    },
  ];

  displayLoop(firstSectionData, firstSection);

  // second Section

  const secondSection = document.createElement("div");
  secondSection.classList.add(
    "secondSection",
    "marginBetweenSection",
    "sectionBulid"
  );

  const secondSectionData = [
    {
      uploadPhoto: "./download (1).jpg",
      caption: "Mr.Bean bear Tada",
      userPhoto:
        "./Bomi Yun _ Manhwa_ Seasons of Blossom _ Author_ Hongduck _ Artist_ Nemone.jpg",
      userName: "Yumn",
      postId: 5,
    },
    {
      uploadPhoto: "./Pinterest.jpg",
      caption: "Aesthetic anime food",
      userPhoto:
        "./Somang Han _ Manhwa_ Seasons of Blossom _ Author_ Hongduck _ Artist_ Nemone (1).jpg",
      userName: "Asuka",
      postId: 6,
    },
    {
      uploadPhoto: "./download (2).jpg",
      caption: "Study at university",
      userPhoto: "./download (3).jpg",
      userName: "Benjiro",
      postId: 7,
    },
  ];

  displayLoop(secondSectionData, secondSection);

  // third Section

  const thirdSection = document.createElement("div");
  thirdSection.classList.add(
    "thirdSection",
    "marginBetweenSection",
    "sectionBulid"
  );

  const thirdSectionData = [
    {
      uploadPhoto: "./🌸🌸🌸.jpg",
      caption: "Teddy bear's wonderful day",
      userPhoto: "./🌷🍃.jpg",
      userName: "Teddy Bear",
      postId: 8,
    },
    {
      uploadPhoto: "./Icons 🍥 (@MatchsIcons) _ Twitter.png",
      caption: "Couple on kiss",
      userPhoto: "./COMFORT CHARACTER.jpg",
      userName: "Hachirou",
      postId: 9,
    },
    {
      uploadPhoto: "./Cheryl 🍡 on Twitter.jpg",
      caption: "At the downtown",
      userPhoto: "./_3.jpg",
      userName: "Kota",
      postId: 10,
    },
  ];

  displayLoop(thirdSectionData, thirdSection);

  // fourth Section

  const fourthSection = document.createElement("div");
  fourthSection.classList.add(
    "fourthSection",
    "marginBetweenSection",
    "sectionBulid"
  );

  const fourthSectionData = [
    {
      uploadPhoto:
        "./5 Tips For Studying at Home During Weekends and Short Holiday Breaks — Value Knowledge Over Grades.png",
      caption: "Study Study",
      userPhoto: "./FUJI SHIKIMORI ICON.jpg",
      userName: "Daido",
      postId: 11,
    },
    {
      uploadPhoto:
        "./Korean Bear Stickers PNG Picture, Cute Happy Korean Bear Sticker, Korean Bear, Bear Sticker, Cute Bear PNG Image For Free Download.png",
      caption: "Teddy bear for girls",
      userPhoto: "./Shikomori ┇ Shikomori_san.jpg",
      userName: "Jiro",
      postId: 12,
    },
    {
      uploadPhoto:
        "./New Best Things to do in Tokyo, Japan [2022] _ You Could Travel.jpg",
      caption: "Japanese downtown night life",
      userPhoto: "./Discord - A New Way to Chat with Friends & Communities.jpg",
      userName: "Kiyoshi",
      postId: 13,
    },
    {
      uploadPhoto: "./❤                   IG  @ayepixel   on We Heart It.jpg",
      caption: "Sneakers",
      userPhoto: "./Shinju ⊹𓈒ʿʿ🏠୭.jpg",
      userName: "Reina",
      postId: 14,
    },
  ];

  displayLoop(fourthSectionData, fourthSection);

  // fifth Section

  const fifthSection = document.createElement("div");
  fifthSection.classList.add(
    "fifthSection",
    "marginBetweenSection",
    "sectionBulid"
  );

  const fifthSectionData = [
    {
      uploadPhoto: "./Warmth 02, Arvin Jezer Gagui.jpg",
      caption: "Warmth kind heart couple on train",
      userPhoto: "./Haruhiko.jpg",
      userName: "Noritaka",
      postId: 15,
    },
    {
      uploadPhoto: "./download (4).jpg",
      caption: "The girl with the cat",
      userPhoto: "./朝霧　史織.jpg",
      userName: "Reiki",
      postId: 16,
    },
    {
      uploadPhoto: "./🧸 @𝙫𝙞𝙧𝙩𝙪𝙖𝙡𝙝𝙖𝙞𝙡𝙨.jpg",
      caption: "Anime drinks",
      userPhoto: "./Reine Murasame Icon.jpg",
      userName: "Miyuki ",
      postId: 17,
    },
    {
      uploadPhoto: "./download (7).jpg",
      caption: "Smart bear",
      userPhoto: "./Azur Lane Bisoku Zenshin icons.jpg",
      userName: "Azur Lane",
      postId: 18,
    },
  ];

  displayLoop(fifthSectionData, fifthSection);

  photosSectionContainer.append(
    firstSection,
    secondSection,
    thirdSection,
    fourthSection,
    fifthSection
  );
};

showPhotoSection();

const photosInput = document.querySelector(".photosInput");
const searchList = document.querySelector(".searchList");

const searchListArray = [
  {
    uploadPhoto: "./kao komichi.jpg",
    caption: "kao komichi cute moment",
    userPhoto: "./download.jpg",
    userName: "Sakuta",
    postId: 1,
  },
  {
    uploadPhoto: "./9 Best Everything images in 2020.jpg",
    caption: "Studying at home",
    userPhoto: "./sikimorisan.jpg",
    userName: "Shikimori",
    postId: 2,
  },
  {
    uploadPhoto:
      "./Best Fuji San view in Japan_ street in Fujiyoshida (12).jpg",
    caption: "fuji San view in Japan",
    userPhoto:
      "./Somang Han _ Manhwa_ Seasons of Blossom _ Author_ Hongduck _ Artist_ Nemone.jpg",
    userName: "Himari",
    postId: 3,
  },
  {
    uploadPhoto: "./download (5).jpg",
    caption: "Anime School Lunch",
    userPhoto: "./Крашиха.jpg",
    userName: "Yayoi",
    postId: 4,
  },
  {
    uploadPhoto: "./download (1).jpg",
    caption: "Mr.Bean bear Tada",
    userPhoto:
      "./Bomi Yun _ Manhwa_ Seasons of Blossom _ Author_ Hongduck _ Artist_ Nemone.jpg",
    userName: "Yumn",
    postId: 5,
  },
  {
    uploadPhoto: "./Pinterest.jpg",
    caption: "Aesthetic anime food",
    userPhoto:
      "./Somang Han _ Manhwa_ Seasons of Blossom _ Author_ Hongduck _ Artist_ Nemone (1).jpg",
    userName: "Asuka",
    postId: 6,
  },
  {
    uploadPhoto: "./download (2).jpg",
    caption: "Study at university",
    userPhoto: "./download (3).jpg",
    userName: "Benjiro",
    postId: 7,
  },
  {
    uploadPhoto: "./🌸🌸🌸.jpg",
    caption: "Teddy bear's wonderful day",
    userPhoto: "./🌷🍃.jpg",
    userName: "Teddy Bear",
    postId: 8,
  },
  {
    uploadPhoto: "./Icons 🍥 (@MatchsIcons) _ Twitter.png",
    caption: "Couple on kiss",
    userPhoto: "./COMFORT CHARACTER.jpg",
    userName: "Hachirou",
    postId: 9,
  },
  {
    uploadPhoto: "./Cheryl 🍡 on Twitter.jpg",
    caption: "At the downtown",
    userPhoto: "./_3.jpg",
    userName: "Kota",
    postId: 10,
  },
  {
    uploadPhoto:
      "./5 Tips For Studying at Home During Weekends and Short Holiday Breaks — Value Knowledge Over Grades.png",
    caption: "Study Study",
    userPhoto: "./FUJI SHIKIMORI ICON.jpg",
    userName: "Daido",
    postId: 11,
  },
  {
    uploadPhoto:
      "./Korean Bear Stickers PNG Picture, Cute Happy Korean Bear Sticker, Korean Bear, Bear Sticker, Cute Bear PNG Image For Free Download.png",
    caption: "Teddy bear for girls",
    userPhoto: "./Shikomori ┇ Shikomori_san.jpg",
    userName: "Jiro",
    postId: 12,
  },
  {
    uploadPhoto:
      "./New Best Things to do in Tokyo, Japan [2022] _ You Could Travel.jpg",
    caption: "Japanese downtown night life",
    userPhoto: "./Discord - A New Way to Chat with Friends & Communities.jpg",
    userName: "Kiyoshi",
    postId: 13,
  },
  {
    uploadPhoto: "./❤                   IG  @ayepixel   on We Heart It.jpg",
    caption: "Sneakers",
    userPhoto: "./Shinju ⊹𓈒ʿʿ🏠୭.jpg",
    userName: "Reina",
    postId: 14,
  },
  {
    uploadPhoto: "./Warmth 02, Arvin Jezer Gagui.jpg",
    caption: "Warmth kind heart couple on train",
    userPhoto: "./Haruhiko.jpg",
    userName: "Noritaka",
    postId: 15,
  },
  {
    uploadPhoto: "./download (4).jpg",
    caption: "The girl with the cat",
    userPhoto: "./朝霧　史織.jpg",
    userName: "Reiki",
    postId: 16,
  },
  {
    uploadPhoto: "./🧸 @𝙫𝙞𝙧𝙩𝙪𝙖𝙡𝙝𝙖𝙞𝙡𝙨.jpg",
    caption: "Anime drinks",
    userPhoto: "./Reine Murasame Icon.jpg",
    userName: "Miyuki ",
    postId: 17,
  },
  {
    uploadPhoto: "./download (7).jpg",
    caption: "Smart bear",
    userPhoto: "./Azur Lane Bisoku Zenshin icons.jpg",
    userName: "Azur Lane",
    postId: 18,
  },
];

let filteredArray;

photosInput.addEventListener("keyup", (event) => {
  if (
    event.key === "ArrowUp" ||
    event.key === "ArrowDown" ||
    event.key === "Enter"
  ) {
    keyboardNevigation(event.key);
    return;
  }
  searchList.innerHTML = "";
  const searchValue = event.target.value.toLowerCase();
  if (searchValue.length === 0) {
    indexToSelect = -1;
    return;
  }
  filteredArray = searchListArray.filter((foto) => {
    return foto.caption.toLowerCase().includes(searchValue);
  });
  if (filteredArray.length > 0) {
    for (let i = 0; i < filteredArray.length; i++) {
      const filteredPhotoAndCaption = document.createElement("div");
      filteredPhotoAndCaption.classList.add("filteredPhotoAndCaption");
      filteredPhotoAndCaption.id = filteredArray[i].postId;

      const filteredPhoto = document.createElement("img");
      filteredPhoto.classList.add("filteredPhoto");
      filteredPhoto.src = filteredArray[i].uploadPhoto;

      const filteredCaption = document.createElement("div");
      filteredCaption.classList.add("filteredCaption", "cuteFont");
      filteredCaption.append(filteredArray[i].caption);

      filteredPhotoAndCaption.append(filteredCaption, filteredPhoto);
      searchList.append(filteredPhotoAndCaption);
    }
  }
});

let indexToSelect = -1;

const keyboardNevigation = (key) => {
  if (key === "ArrowUp") {
    if (indexToSelect === -1) {
      indexToSelect = filteredArray.length - 1;
      const fotoToSelect = selectFunction(indexToSelect);
      fotoToSelect.classList.add("selected");
      return;
    }
    if (indexToSelect === 0) {
      indexToSelect = filteredArray.length - 1;
      const fotoToSelect = selectFunction(indexToSelect);
      deSelectFunction();
      fotoToSelect.classList.add("selected");
      return;
    }
    indexToSelect -= 1;
    const fotoToSelect = selectFunction(indexToSelect);
    deSelectFunction();
    fotoToSelect.classList.add("selected");
  } else if (key === "ArrowDown") {
    if (indexToSelect === filteredArray.length - 1) {
      indexToSelect = -1;
      deSelectFunction();
    }
    indexToSelect += 1;
    const fotoToSelect = selectFunction(indexToSelect);
    if (indexToSelect > 0) {
      deSelectFunction();
    }
    fotoToSelect.classList.add("selected");
  } else {
    leftCard.innerHTML = "";
    rightCard.innerHTML = "";

    const enteredUploadPhoto = document.createElement("img");
    enteredUploadPhoto.classList.add(
      "clickedUploadPhoto",
      "enteredUploadPhoto"
    );
    enteredUploadPhoto.src = filteredArray[indexToSelect].uploadPhoto;

    const enteredCaption = document.createElement("div");
    enteredCaption.classList.add("uploadedCaption");
    enteredCaption.append(filteredArray[indexToSelect].caption);

    const enteredUserPhoto = document.createElement("img");
    enteredUserPhoto.classList.add("userPhoto");
    enteredUserPhoto.src = filteredArray[indexToSelect].userPhoto;

    const enteredUserName = document.createElement("div");
    enteredUserName.classList.add("userName", "fontStyle");
    enteredUserName.append(filteredArray[indexToSelect].userName);

    const enteredUserProfile = document.createElement("div");
    enteredUserProfile.append(enteredUserPhoto, enteredUserName);
    enteredUserProfile.classList.add(
      "userProfile",
      "cursor",
      "uploadedUserProfile"
    );

    makeClickedCard(enteredUploadPhoto, enteredUserProfile, enteredCaption);
    searchList.innerHTML = "";
    photosInput.value = "";
    indexToSelect = -1;
  }
};

const deSelectFunction = () => {
  const fotoToDeselect = document.getElementsByClassName("selected")[0];
  fotoToDeselect.style.backgroundColor = "white";
  fotoToDeselect.firstChild.style.color = "black";
  fotoToDeselect.classList.remove("selected");
};

const selectFunction = (index) => {
  const fotoIdToSelect = filteredArray[index].postId;
  const fotoToSelect = document.getElementById(fotoIdToSelect);
  fotoToSelect.style.backgroundColor = "#95BE44";
  fotoToSelect.firstChild.style.color = "white";
  return fotoToSelect;
};

// Music Player

const musicArray = [
  {
    musicSource: "./Nicky_Youre,_dazy_-_Sunroof_(Lyrics)(256k).mp3",
    musicName: "Sunroof",
    musicPhoto:
      "https://i.ytimg.com/vi/0i7antxPGKY/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIF0oUTAP&rs=AOn4CLA85JFZDeNGMTQXoNBy1F7BXp3knQ",
    musicId: 1,
  },
  {
    musicSource: "./Taylor_Swift_-_You_Belong_With_Me(256k).mp3",
    musicName: "You belong with me",
    musicPhoto:
      "https://i.ytimg.com/vi/VuNIsY6JdUw/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBYIaCGTUZ6SjN3PRaSxIeGFjtIjg",
    musicId: 2,
  },
  {
    musicSource: "./Thont pan.mp3",
    musicName: "Thont pan",
    musicPhoto:
      "https://i.ytimg.com/vi/UWVReGp72dY/hqdefault.jpg?sqp=-oaymwE2COADEI4CSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgBqAOAAvABigIMCAAQARhUIFcoZTAP&rs=AOn4CLDvQz7qU9ZI2kqejklup4YID7SJ0w",
    musicId: 3,
  },
  {
    musicSource:
      "./I_Like_You_So_Much,_You'll_Know_It_-_Ysabelle_Cuevas_(Lyric_Video)_(A_Love_So_Beautiful_OST)(256k).mp3",
    musicName: "I like you so much You'll know it",
    musicPhoto:
      "https://i.ytimg.com/vi/72FLyNg0E2I/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC8qzUtACjioQGD-okyPjedVpQNGw",
    musicId: 4,
  },
  {
    musicSource: "./Sar myat nar 15.mp3",
    musicName: "Sar myat nar 15",
    musicPhoto:
      "https://i.ytimg.com/vi/SR3bxfKkcBQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC94Y1j_UZr8Czv30IC0nGsk-iR7A",
    musicId: 5,
  },
  {
    musicSource: "./Orange_-_7!!._(underwater_version)(256k).mp3",
    musicName: "Orange 7",
    musicPhoto:
      "https://i.ytimg.com/vi/AemMz2vnM_k/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBune2xf9CSNlb79SZ7-qfaNZ-eLA",
    musicId: 6,
  },
  {
    musicSource: "./Wan nel tat tae chit thu.mp3",
    musicName: "Wan nel tat tae chit thu",
    musicPhoto:
      "https://i.ytimg.com/vi/WMqoSVSBaks/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCqDkgtnr3xE7OMoid_VQdoGXsCbA",
    musicId: 7,
  },
  {
    musicSource: "./Nuu nyant tae a maint taw a tine.mp3",
    musicName: "Nuu nyant tae a maint taw a tine",
    musicPhoto:
      "https://i.ytimg.com/vi/QF1V1aXKB9E/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDeqYPrhDuYRlcHShKxVnF2pNMo6g",
    musicId: 8,
  },
  {
    musicSource: "./The way I still love you.mp3",
    musicName: "The way I still love you",
    musicPhoto:
      "https://i.ytimg.com/vi/3BwfmrrAexA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBbjSf0M-nH2xMkyx5SkMJSvSvEeA",
    musicId: 9,
  },
  {
    musicSource: "./Ngr thay loh ya dl.mp3",
    musicName: "Ngr thay loh ya dl",
    musicPhoto:
      "https://i.ytimg.com/vi/REx6D77WfrQ/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB1AaAAuADigIMCAAQARhNIFYoZTAP&rs=AOn4CLArU6x6C_irfoKO-0Pvo2IETbXv0A",
    musicId: 10,
  },
  {
    musicSource:
      "./Chase_White_ft._Jimmy_Burney_-_Mrs_Right_(Royalty_Free_Music)(256k).mp3",
    musicName: "Chase white ft Jimmy",
    musicPhoto:
      "https://i.ytimg.com/vi/PMV-q3eX4hk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCo4FQF_XAWqs0WGI5uFDbvgSwmJg",
    musicId: 11,
  },
  {
    musicSource: "./pyae_sone_loon(256k).mp3",
    musicName: "Pyae sone loon",
    musicPhoto:
      "https://i.ytimg.com/vi/A7tREMs9_iM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBsqrihnic6GG9taKZliYJzH2rMYg",
    musicId: 12,
  },
  {
    musicSource: "./Myor ny ml saung.mp3",
    musicName: "Myor ny ml saung",
    musicPhoto:
      "https://i.ytimg.com/vi/YvdLUf0WUWU/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB1AaAAuADigIMCAAQARgTIC4ofzAP&rs=AOn4CLCmLS44N_TAjFTHhL-1xydjdz9mFg",
    musicId: 13,
  },
  {
    musicSource: "./Bruno_Mars_-_Just_The_Way_You_Are_(Lyrics)(256k).mp3",
    musicName: "Just the way you are",
    musicPhoto: "https://images6.alphacoders.com/691/thumbbig-691454.webp",
    musicId: 14,
  },
  {
    musicSource: "./Min shi tae myo.mp3",
    musicName: "Min shi tae myo",
    musicPhoto:
      "https://i.ytimg.com/vi/51N3fLAEPF8/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLASR8RthAlRiSrrFAhAcG7uxbpP0g",
    musicId: 15,
  },
  {
    musicSource: "./a pyar yaung nya.mp3",
    musicName: "A pyar yaung nya",
    musicPhoto:
      "https://i.ytimg.com/vi/9gW8su35pJk/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC5ar08oCnCCEFdMAnw8BLRCD4c0g",
    musicId: 16,
  },
  {
    musicSource: "./Maroon_5_-_Payphone_(Lyrics)(256k).mp3",
    musicName: "Payphone",
    musicPhoto: "https://images3.alphacoders.com/704/thumbbig-704725.webp",
    musicId: 17,
  },
  {
    musicSource: "./koh yae kwat lat.m4a",
    musicName: "Koh yae kwat lat",
    musicPhoto:
      "https://i.ytimg.com/vi/CDf6wXBlOUQ/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_g6AArgIigIMCAAQARhgIGUoSTAP&rs=AOn4CLAQTxz_zZip-B7LTO--D-xm_ogVFw",
    musicId: 18,
  },
  {
    musicSource: "./letter-i-zenith-lyrics.m4a",
    musicName: "Letter i",
    musicPhoto:
      "https://i.ytimg.com/vi/uli3V026W0g/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyIFUoQzAP&rs=AOn4CLBycFWlBYSb_Xb_uLEKHRniDRRzBg",
    musicId: 19,
  },
  {
    musicSource:
      "./Y2Mate.is - Jaden - BYE (Lyrics)  Laying down in my bed at 4 a.m we get up [TikTok Song]-Ot_Jj5t-zZc-160k-1654373920427.mp3",
    musicName: "Bye Jaden",
    musicPhoto:
      "https://i.ytimg.com/vi/Ot_Jj5t-zZc/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLD-jZhW85F4CpU3_XmT5NYa8PkHcA",
    musicId: 20,
  },
];

// music object syntax

// {musicSource: "", musicName: "", musicPhoto: "", musicId: 0},

const rightSection = document.querySelector(".rightSection");
const leftSection = document.querySelector(".leftSection");

const audioTag = document.querySelector(".audioTag");
let musicContainer;

// Right Section

const makeMusicPlayerRightSection = (musicArray) => {
  for (let i = 0; i < musicArray.length; i++) {
    const musicTitle = document.createElement("div");
    musicTitle.classList.add("musicTitle", "cursor");
    const title =
      musicArray[i].musicId.toString() + ". " + musicArray[i].musicName;
    musicTitle.append(title);
    const photoTag = document.createElement("img");
    photoTag.src = musicArray[i].musicPhoto;
    photoTag.classList.add("photoTag", "cursor");

    const musicAndPhoto = document.createElement("div");
    musicAndPhoto.classList.add("musicAndPhoto");

    musicAndPhoto.addEventListener("click", () => {
      currentPlayingIndex = i;
      songPlayAndPhotoChange();
    });

    musicAndPhoto.append(musicTitle, photoTag);
    musicContainer = document.createElement("div");
    musicContainer.classList.add("musicContainer");
    musicContainer.append(musicAndPhoto);
    rightSection.append(musicContainer);
  }
};

makeMusicPlayerRightSection(musicArray);

// Left Section

let musicDisplayPhoto;
let playTime;
let currentProgress;

let currentPlayingIndex = 0;
let isPlaying = false;

let pauseButton;
let playButton;

const makeMusicPlayerLeftSection = () => {
  musicDisplayPhoto = document.createElement("img");
  musicDisplayPhoto.classList.add("musicDisplayPhoto");
  musicDisplayPhoto.src = "./Rare Gallery wallpaper.jpg";

  playTime = document.createElement("div");
  playTime.classList.add("playTime");
  playTime.append("00:00 / 00:00");

  const progressBar = document.createElement("div");
  progressBar.classList.add("progressBar");

  currentProgress = document.createElement("div");
  currentProgress.classList.add("currentProgress");

  progressBar.append(currentProgress);

  const previousButton = document.createElement("i");
  previousButton.classList.add(
    "fa-solid",
    "fa-circle-arrow-left",
    "controlButton",
    "cursor"
  );

  previousButton.addEventListener("click", () => {
    if (currentPlayingIndex === 0) {
      return;
    }
    currentPlayingIndex -= 1;
    songPlayAndPhotoChange();
  });

  const nextButton = document.createElement("i");
  nextButton.classList.add(
    "fa-solid",
    "fa-circle-arrow-right",
    "controlButton",
    "cursor"
  );

  nextButton.addEventListener("click", () => {
    if (currentPlayingIndex === musicArray.length - 1) {
      return;
    }
    currentPlayingIndex += 1;
    songPlayAndPhotoChange();
  });

  playButton = document.createElement("i");
  playButton.classList.add(
    "fa-solid",
    "fa-circle-play",
    "controlButton",
    "cursor"
  );

  playButton.addEventListener("click", () => {
    isPlaying = true;
    const currentTime = Math.floor(audioTag.currentTime);
    if (currentTime === 0) {
      songPlayAndPhotoChange();
    } else {
      audioTag.play();
    }
    updatePlayAndPauseButton();
  });

  pauseButton = document.createElement("i");
  pauseButton.classList.add(
    "fa-solid",
    "fa-sharp",
    "fa-circle-pause",
    "controlButton",
    "pauseButton",
    "cursor"
  );

  pauseButton.addEventListener("click", () => {
    audioTag.pause();
    isPlaying = false;
    updatePlayAndPauseButton();
  });

  const musicButtonContainer = document.createElement("div");
  musicButtonContainer.classList.add("musicButtonContainer");
  musicButtonContainer.append(
    previousButton,
    pauseButton,
    playButton,
    nextButton
  );

  // leftSection append

  const musicControlAndShow = document.createElement("div");
  musicControlAndShow.classList.add("musicControlAndShow");

  musicControlAndShow.append(
    musicDisplayPhoto,
    playTime,
    progressBar,
    musicButtonContainer
  );

  leftSection.append(musicControlAndShow);
};

makeMusicPlayerLeftSection();

let durationTag;
let duration;

audioTag.addEventListener("loadeddata", () => {
  duration = Math.floor(audioTag.duration);
  durationTag = makeMinutesTextAndSecondsText(duration);
});

audioTag.addEventListener("timeupdate", () => {
  const currentTime = Math.floor(audioTag.currentTime);
  const currentTimeTag = makeMinutesTextAndSecondsText(currentTime);
  playTime.textContent = currentTimeTag + " / " + durationTag;
  const currentProgressWidth = (350 / duration) * currentTime;
  currentProgress.style.width = currentProgressWidth.toString() + "px";
});

const makeMinutesTextAndSecondsText = (music) => {
  const minutes = Math.floor(music / 60);
  const seconds = music % 60;

  const minutesText = minutes < 10 ? "0" + minutes : minutes;
  const secondsText = seconds < 10 ? "0" + seconds : seconds;
  return minutesText + ":" + secondsText;
};

const updatePlayAndPauseButton = () => {
  if (isPlaying) {
    playButton.style.display = "none";
    pauseButton.style.display = "inline";
  } else {
    playButton.style.display = "inline";
    pauseButton.style.display = "none";
  }
};

const songPlayAndPhotoChange = () => {
  const musicPhotoToShow = musicArray[currentPlayingIndex].musicPhoto;
  musicDisplayPhoto.src = musicPhotoToShow;
  const songSrcToPlay = musicArray[currentPlayingIndex].musicSource;
  audioTag.src = songSrcToPlay;
  audioTag.play();
  isPlaying = true;
  updatePlayAndPauseButton();
};

audioTag.onended = function () {
  if (currentPlayingIndex === musicArray.length - 1) {
    isPlaying = false;
    updatePlayAndPauseButton();
    return;
  }
  currentPlayingIndex += 1;
  songPlayAndPhotoChange();
};

// Arbwrr Section

const arbwrrSection = document.querySelector(".arbwrrSection");

arbwrrButton.addEventListener("click", () => {
  arbwrrSection.innerHTML = "";
  const arbwrrAlert = document.createElement("div");
  arbwrrAlert.classList.add("arbwrrAlert");
  arbwrrAlert.append("Ar Bwrr Achik lyy mwah mwah");
  arbwrrSection.append(arbwrrAlert);
  arbwrrAlert.style.bottom = `-${arbwrrAlert.offsetHeight}px`;
  setTimeout(() => {
    arbwrrAlert.style.bottom = "0px";
  }, 100);
  setTimeout(() => {
    arbwrrAlert.style.bottom = `-${arbwrrAlert.offsetHeight}px`;
  }, 3000);
});

// Music Input

let musicFilteredArray;

musicInput.addEventListener("keyup", (event) => {
  if (
    event.key === "ArrowUp" ||
    event.key === "ArrowDown" ||
    event.key === "Enter"
  ) {
    musicKeyboardNevigation(event.key);
    return;
  }
  searchList.innerHTML = "";
  const searchedMusic = event.target.value.toLowerCase();
  if (searchedMusic.length === 0) {
    return;
  }
  musicFilteredArray = musicArray.filter((music) => {
    return music.musicName.toLowerCase().includes(searchedMusic);
  });
  if (musicFilteredArray.length > 0) {
    for (let i = 0; i < musicFilteredArray.length; i++) {
      const filteredMusicNameAndPhoto = document.createElement("div");
      filteredMusicNameAndPhoto.classList.add("filteredPhotoAndCaption");
      filteredMusicNameAndPhoto.id = musicFilteredArray[i].musicId;

      const filteredMusicName = document.createElement("div");
      filteredMusicName.classList.add("filteredCaption", "cuteFont");
      filteredMusicName.append(musicFilteredArray[i].musicName);

      const filteredMusicPhoto = document.createElement("img");
      filteredMusicPhoto.classList.add("filteredPhoto");
      filteredMusicPhoto.src = musicFilteredArray[i].musicPhoto;

      filteredMusicNameAndPhoto.append(filteredMusicName, filteredMusicPhoto);
      searchList.append(filteredMusicNameAndPhoto);
    }
  }
});

let musicIndex = -1;

const musicKeyboardNevigation = (key) => {
  if (key === "ArrowUp") {
    if (musicIndex === -1) {
      musicIndex = musicFilteredArray.length - 1;
      const musicTagToSelect = musicSelectFunction(musicIndex);
      musicTagToSelect.classList.add("musicSelected");
      return;
    }
    if (musicIndex === 0) {
      musicIndex = musicFilteredArray.length - 1;
      const musicTagToSelect = musicSelectFunction(musicIndex);
      musicDeselectFunction();
      musicTagToSelect.classList.add("musicSelected");
      return;
    }
    musicIndex -= 1;
    const musicTagToSelect = musicSelectFunction(musicIndex);
    musicDeselectFunction();
    musicTagToSelect.classList.add("musicSelected");
  } else if (key === "ArrowDown") {
    if (musicIndex === musicFilteredArray.length - 1) {
      musicIndex = 0;
      const musicTagToSelect = musicSelectFunction(musicIndex);
      musicDeselectFunction();
      musicTagToSelect.classList.add("musicSelected");
      return;
    }
    musicIndex += 1;
    const musicTagToSelect = musicSelectFunction(musicIndex);
    if (musicIndex > 0) {
      musicDeselectFunction();
    }
    musicTagToSelect.classList.add("musicSelected");
  } else {
    const selectedMusic = musicFilteredArray[musicIndex].musicSource;
    audioTag.src = selectedMusic;
    audioTag.play();
    const selectedMusicPhoto = musicFilteredArray[musicIndex].musicPhoto;
    musicDisplayPhoto.src = selectedMusicPhoto;
    isPlaying = true;
    updatePlayAndPauseButton();
    musicInput.value = "";
    searchList.innerHTML = "";
    musicIndex = -1;
  }
};

const musicDeselectFunction = () => {
  const musicToDeselect = document.getElementsByClassName("musicSelected")[0];
  musicToDeselect.style.backgroundColor = "white";
  musicToDeselect.firstChild.style.color = "black";
  musicToDeselect.classList.remove("musicSelected");
};

const musicSelectFunction = (index) => {
  const musicIdToSelect = musicFilteredArray[index].musicId;
  const musicTagToSelect = document.getElementById(musicIdToSelect);
  musicTagToSelect.style.backgroundColor = "#F30288";
  musicTagToSelect.firstChild.style.color = "white";
  return musicTagToSelect;
};

// sort

const dropDown = document.querySelector(".dropDown");
const sortMenu = document.querySelector(".sortMenu");

dropDown.addEventListener("click", () => {
  sortMenu.innerHTML = "";
  if (sortMenu.classList.contains("clicked")) {
    sortMenu.classList.remove("clicked");
    return;
  }
  const ascendingButton = document.createElement("div");
  ascendingButton.append("Ascending");
  ascendingButton.classList.add("ascendingButton", "cursor");

  ascendingButton.addEventListener("click", () => {
    sortMenu.innerHTML = "";
    rightSection.innerHTML = "";
    sortMenu.classList.remove("clicked");
    const musicSortByAscending = musicArray.sort(
      (a, b) => a.musicId - b.musicId
    );
    makeMusicPlayerRightSection(musicSortByAscending);
  });

  const descendingButton = document.createElement("div");
  descendingButton.append("Descending");
  descendingButton.classList.add("descendingButton", "cursor");

  descendingButton.addEventListener("click", () => {
    sortMenu.innerHTML = "";
    rightSection.innerHTML = "";
    sortMenu.classList.remove("clicked");
    const musicSortByDescending = musicArray.sort(
      (a, b) => b.musicId - a.musicId
    );
    makeMusicPlayerRightSection(musicSortByDescending);
  });

  sortMenu.classList.add("clicked");
  sortMenu.append(ascendingButton, descendingButton);
});

// bell Icon

const bellIcon = document.querySelector(".bell");

bellIcon.addEventListener("click", () => {
  alert("Ring Ring");
});

// Comment Icon

const commentIcon = document.querySelector(".commentIcon");

commentIcon.addEventListener("click", () => {
  alert("Comments are not allowed at this moment");
});

const randomString = "hfodncyrwrcl";

const reverseFunction = (incomingStr) => {
  let reversedString = "";
  for (let i = incomingStr.length - 1; i >= 0; i--) {
    reversedString += incomingStr[i];
  }
  return reversedString;
};

const reversedFunctionValue = reverseFunction(randomString);

console.log(reversedFunctionValue);
