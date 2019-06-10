$("#search").on('click', function(event){
    event.preventDefault();
    var term = $("#searchTerm").val();
    var yearStart =$("#searchYear").val();
    var yearEnd =$("searchEnd").val();
    var records = $("#seachNumber").val();
    console.log(term);
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + term + "&facet_fields= source&facet=true&begin_date=" + yearStart + "&end_date=" + yearEnd + "page=0" +"&api - key=iBnmKatoqNtxhgPjQanm7Mad73AorZ2R";
    // $('#searchForm').on('submit',function(event){
    //     event.preventDefault();
    // })
    $.ajax({
        url:url,
        method:"GET"}).then(function(respond){
            var result = respond.data;
            console.log(respond);
        })
        
    });
