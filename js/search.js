function search() {
    if (sessionStorage.length !== 0) {
        for (let x = sessionStorage.length - 1; x >= 0; x = x - 1){
            sessionStorage.removeItem(x.toString());
        }
    }

    $.getJSON("text/data.json", function (data) {
        let i;
        let j;
        let h;
        let searched = $("#searchInput").val().toLowerCase().split(" ");
        let result = [];
        for (i in data.Maths) {
            for (j in data.Maths[i].thèmes) {
                for (h in data.Maths[i].thèmes[j].tags) {
                    if (searched.includes(data.Maths[i].thèmes[j].tags[h])) {
                        result.push(data.Maths[i].thèmes[j].title)
                        break;
                    }
                }
            }
        }
        for (i in data.PhysiqueChimie) {
            for (j in data.PhysiqueChimie[i].thèmes) {
                for (h in data.PhysiqueChimie[i].thèmes[j].tags) {
                    if (searched.includes(data.PhysiqueChimie[i].thèmes[j].tags[h])) {
                        result.push(data.PhysiqueChimie [i].thèmes[j].title)
                        break;
                    }
                }
            }
        }
        let x;
        for (x in result) {
            sessionStorage.setItem(x, result[x]);
        }
        window.open("search.html", "_self")
    })
}
