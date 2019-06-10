$("#subit").on('click', function(){
    var term = $("#searTerm");
    var yearStart =$("#search");
    var yearEnd =$();
    var records = $();
    
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + term +"&api-key=iBnmKatoqNtxhgPjQanm7Mad73AorZ2R&facet_fields= source&facet=true&begin_date="+yearStart+"&end_date="+yearEnd+"page=0";
    
    $.ajax({
        url:url,
        method:"GET"}).then(function(respond){
            var result = respond.data;
        })
        
    });