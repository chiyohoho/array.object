var mainCard = document.querySelector(".main_body")
var caseIMG = document.querySelector(".case_img")
var product = [
    {
        name: "Ice Coaled",
        rare: "Classified Rifle",
        rareColor: "#d32ce6",
        special: "StatTrak Available",
        specialColor: "#f89406",
        img: "https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL2RlZmF1bHRfZ2VuZXJhdGVkL3dlYXBvbl9hazQ3X2N1X2FrNDdfY29ndGhpbmdzX2xpZ2h0X2xhcmdlLjliNDY3OGE3MGMzMTVlNWQ2MGEyMDM0MzZiN2E5NWNkNGM1ZGNjODkucG5n/auto/auto/85/notrim/bc13b2fd9ea48a6ffc74b418aac13e32.webp",
        nonFrom: 4.53,
        nonTo: 24.27,
        sttFrom: 11.57,
        sttTo: 60.76,
        imgCase: "https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL3dlYXBvbl9jYXNlcy9jcmF0ZV9jb21tdW5pdHlfMzEuNDQwYjQzZjRhZDNmY2ZlMzQ0Y2U2M2I1ZDhjZjU5Y2Q4MDM0YmExYS5wbmc-/auto/50/85/notrim/a4bcc712c664318515a046de2980494d.webp",
        nameCase: "Recoil Case",
        numberOffer: "14K offers",
        numberMarket: "on 19 markets"
    },
    {
        name: "Gold Arabesque",
        rare: "Covert Rifle",
        rareColor: "#eb4b4b",
        special: "Souvenir Available",
        specialColor: "#ffd700",
        img: "https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL2RlZmF1bHRfZ2VuZXJhdGVkL3dlYXBvbl9hazQ3X2dzX2FrNDdfZ29sZF9hcmFiZXNxdWVfbGlnaHRfbGFyZ2UuMGQxYjBiMmJmY2FmZThkMjE0ODM3MDc3MzY3ZTdkZDQyMzk0ODIyZS5wbmc-/auto/auto/85/notrim/a2ddab6bbea577e44ac836f6487adcdf.webp",
        nonFrom: 1896.2,
        nonTo: 4719.9,
        sttFrom: 1920.49,
        sttTo: 9876.81,
        imgCase: "",
        nameCase: "Found in 3 containers",
        numberOffer: "1K offers",
        numberMarket: "on 14 markets"
    },
    {
        name: "Redline",
        rare: "Classified Rifle",
        rareColor: "#d32ce6",
        special: "StatTrak Available",
        specialColor: "#f89406",
        img: "https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL2RlZmF1bHRfZ2VuZXJhdGVkL3dlYXBvbl9hazQ3X2N1X2FrNDdfY29icmFfbGlnaHRfbGFyZ2UuNzQ5NGJmZGY0ODU1ZmQ0ZTZhMmRiZDk4M2VkMGEyNDNjODBlZjgzMC5wbmc-/auto/auto/85/notrim/9a068b7121ffae140452a8689b49a98b.webp",
        nonFrom: 9.12,
        nonTo: 73,
        sttFrom: 21.1,
        sttTo: 202.4,
        imgCase: "https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL3dlYXBvbl9jYXNlcy9jcmF0ZV9jb21tdW5pdHlfMi40OTE3NGFiZGRjY2NiNjUxOWI4M2QyN2QwY2ZmNDc2ZTFjNDRjYzU3LnBuZw--/auto/50/85/notrim/4a95ce6fd649f881acd11178b1ec8f99.webp",
        nameCase: "Operation Phoenix Weapon Case",
        numberOffer: "11K offers",
        numberMarket: "on 19 markets"
    },
    {
        name: "Wild Lotus",
        rare: "Covert Rifle",
        rareColor: "#eb4b4b",
        special: "",
        specialColor: "",
        img: "https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL2RlZmF1bHRfZ2VuZXJhdGVkL3dlYXBvbl9hazQ3X2N1X2FrX2lzbGFuZF9mbG9yYWxfbGlnaHRfbGFyZ2UuMTMwM2U3NmQwYTc3YWIxNjRhNDZhN2FiYTVhYjFkY2FmMWFjZWU2Yi5wbmc-/auto/auto/85/notrim/5d9abdf853173dda6e4ed8bda689f68c.webp",
        nonFrom: 2661.25,
        nonTo: 11728.64,
        sttFrom: "",
        sttTo: "",
        imgCase: "https://cdn.csgoskins.gg/public/uih/collections/aHR0cHM6Ly9jZG4uY3Nnb3NraW5zLmdnL3B1YmxpYy9pbWFnZXMvY29sbGVjdGlvbnMvYmVmZGExMThlN2VjNTZjNDVmMTNlYTRiYzMxMjcxMzcvZGVmYXVsdC5wbmc-/auto/50/85/notrim/ee08a69aab428f45ae742102c7bf8170.webp",
        nameCase: "The St. Marc Collection",
        numberOffer: "11K offers",
        numberMarket: "on 19 markets"
    },
    {
        name: "Green Laminate",
        rare: "Mil-Spec Grade Rifle",
        rareColor: "#4b69ff",
        special: "Souvenir Available",
        specialColor: "#ffd700",
        img: "https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL2RlZmF1bHRfZ2VuZXJhdGVkL3dlYXBvbl9hazQ3X2h5X2FrNDdsYW1fZ3JlZW5fbGlnaHRfbGFyZ2UuZWNiYWY4NWUzNWNhMDgxNTZjYzMwNTAxN2Q0ZGM0Mjc2YTc0MmE4Zi5wbmc-/auto/auto/85/notrim/1bf2e5804118837d3a9abf361ae54177.webp",
        nonFrom: 9.34,
        nonTo: 24.67,
        sttFrom: 9.94,
        sttTo: 22.02,
        imgCase: "",
        nameCase: "Found in 4 containers",
        numberOffer: "2K offers",
        numberMarket: "on 18 markets"
    },
    {
        name: "Jungle Spray",
        rare: "Industrial Grade Rifle",
        rareColor: "#5e98d9",
        special: "",
        specialColor: "",
        img: "https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL2RlZmF1bHRfZ2VuZXJhdGVkL3dlYXBvbl9hazQ3X3NwX3NwcmF5X2p1bmdsZV9saWdodF9sYXJnZS5hZjUyNGVhNjFiZTI5YWI4MWRmYjMyMTI3N2I5OGEyMTEzMzhkZTM3LnBuZw--/auto/auto/85/notrim/d47cca2a9641a87ed7c1cb4d046891ac.webp",
        nonFrom: 4.46,
        nonTo: 96.62,
        sttFrom: "",
        sttTo: "",
        imgCase: "https://cdn.csgoskins.gg/public/uih/collections/aHR0cHM6Ly9jZG4uY3Nnb3NraW5zLmdnL3B1YmxpYy9pbWFnZXMvY29sbGVjdGlvbnMvNjQyYzYyYjcwNTA1MmI3MTJmNTY4ZGI5MTFhOWIzMDcvZGVmYXVsdC5wbmc-/auto/50/85/notrim/c46e07013810839d687a8a66e83ab778.webp",
        nameCase: "The Aztec Collection",
        numberOffer: "1K offers",
        numberMarket: "on 16 markets"
    },
    {
        name: "Fire Serpent",
        rare: "Covert Rifle",
        rareColor: "#eb4b4b",
        special: "StatTrak Available",
        specialColor: "#f89406",
        img: "https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL2RlZmF1bHRfZ2VuZXJhdGVkL3dlYXBvbl9hazQ3X2N1X2ZpcmVzZXJwZW50X2FrNDdfYnJhdm9fbGlnaHRfbGFyZ2UuOTM5MGU3ZmQwOTFlYThhMDQzNGZkMjE0M2UwYWNmMGQ1ZDFiYmM5Ny5wbmc-/auto/auto/85/notrim/b4ea9b46b1903a8e774e8eb629ba54b5.webp",
        nonFrom: 534.99,
        nonTo: 2661.11,
        sttFrom: 944.26,
        sttTo: 4958.7,
        imgCase: "https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL3dlYXBvbl9jYXNlcy9jcmF0ZV9vcGVyYXRpb25faWkuNWU1MTA0YTYyOTE3NDFjNTY5M2ExZTc4YmQ2ZWNjOTU2MGI1MWYwYS5wbmc-/auto/50/85/notrim/e76d86df0c804b9cbf8a5118129c9b0f.webp",
        nameCase: "Operation Bravo Case",
        numberOffer: "1K offers",
        numberMarket: "on 15 markets"
    },
    {
        name: "Elite Build",
        rare: "Mil-Spec Grade Rifle",
        rareColor: "#4b69ff",
        special: "StatTrak Available",
        specialColor: "#f89406",
        img: "https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL2RlZmF1bHRfZ2VuZXJhdGVkL3dlYXBvbl9hazQ3X2N1X2FrNDdfbWFzdGVyeV9saWdodF9sYXJnZS40MzA1YzBiYTRiMDJjZTUzMWZjMDhjMjc1ZmE2YTlkODdkYTJjZjdlLnBuZw--/auto/auto/85/notrim/836042cd2a78ec345eb0a3e78aac763d.webp",
        nonFrom: 0.54,
        nonTo: 3.83,
        sttFrom: 2.25,
        sttTo: 17.13,
        imgCase: "https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL3dlYXBvbl9jYXNlcy9jcmF0ZV9jb21tdW5pdHlfNy41NzI4NmY3MTAyNjBkMWE4ZWI0ZTkzYzQ3OTVhZTdjYTk4MGVhOTgxLnBuZw--/auto/50/85/notrim/a32899439e098a223441ab79130db088.webp",
        nameCase: "Chroma 2 Case",
        numberOffer: "47K offers",
        numberMarket: "on 20 markets"
    }
]
// function domElement(dom) {
//     return document.querySelector(dom);
// }
function showProduct() {
    var str = ``;
    product.map((item, index) => {
        var productName = item.name;
        var productRare = item.rare;
        var productRareColor = item.rareColor;
        var productSpecial = item.special;
        var productSpecialColor = item.specialColor;
        var productImg = item.img;
        var productPriceNonFrom = item.nonFrom;
        var productPriceNonTo = item.nonTo;
        var productPriceFrom = item.sttFrom;
        var productPriceTo = item.sttTo;
        var productImgCase = item.imgCase;
        var productNameCase = item.nameCase;
        var productOffer = item.numberOffer;
        var productMarket = item.numberMarket;
        // -----change color
        str += `
        <div class="main_card">
                    <div class="card_top">
                        <h3 class="card_name">${productName}</h3>
                        <p class="card_rare" style="background: ${productRareColor};">${productRare}</p>
                        <p class="card_special" style="background: ${productSpecialColor};">${productSpecial}</p>
                    </div>

                    <div class="card_middle">
                        <div class="case_info">
                            <img src="${productImg}"
                                style="width: 100%; height: 240px; cursor: pointer;" alt="">

                            <div class="price_nonstt">
                                <h5 class="price_from" style="display: inline-block;">$${productPriceNonFrom}<p>- </p><span
                                        class="price_to"></span>$${productPriceNonTo}</span>
                                </h5>
                            </div>
                            <div class="price_stt" style="color: ${productSpecial === "StatTrak Available" ? "#f89406" : "#ffd700"} ;display: ${productPriceFrom === "" ? "none" : "block"}">
                                <h5 class="stt_from" style="display: inline-block;">$${productPriceFrom}<p>-</p><span
                                        class="stt_to">$${productPriceTo}</span>
                                </h5>
                            </div>
                        </div>
                        <div class="case_drop">
                            <img class="case_img"
                                src="${productImgCase}"
                                alt="recoil" style="width: 30px; height: 20px; cursor: pointer; display: ${productImgCase === "" ? "none" : "block"};">
                            <p class="case_name">${productNameCase}</p>
                        </div>
                    </div>

                    <div class="card_bottom">
                        <p><span>${productOffer} </span>${productMarket}</p>
                    </div>
            </div>
        `
    });
    mainCard.innerHTML = str;
}

showProduct()