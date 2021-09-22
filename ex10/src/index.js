function myFunction() {
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        },
        002: {
        // Add record here
            artist: "Eminem",
            title: "The Way I Am",
            release_year: 2000,
            formats: {
                1: "Tape",
                2: "CD",
                3: "LP"
            },
            gold: true
        }   
    };

    return myMusic;
}
myFunction()[2];
module.exports = myFunction;