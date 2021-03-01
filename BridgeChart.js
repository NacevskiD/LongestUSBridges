bridges = [
    { name: 'Verrazano-Narrows Bridge', city: 'New York', state: 'NY', span: 1298.4, location: [40.6066,-74.0447] },
    { name: 'Golden Gate Bridge', city: 'San Francisco', state: 'CA', span: 1280.2, location: [37.8199, -122.4783] },
    { name: 'Mackinac Bridge', city: 'Mackinaw and St Ignacek', state: 'MI', span: 1158.0 , location: [45.8174, -84.7278] },
    { name: 'George Washington Bridge ', city: 'New York, NY and New Jersey', state: 'NJ', span: 1067.0, location: [40.8517, -73.9527] },
    { name: 'Tacoma Narrows Bridge', city: 'Tacoma and Kitsap', state: 'WA', span: 853.44, location: [47.2690, -122.5517] },
]


let canvas = document.querySelector('#bridge-chart')
let context = canvas.getContext('2d')

let chart = new Chart(context,{
    type: 'bar',
    data:{
        labels :[],
        datasets:[
            {
            label:'Bridge Span',
            data:[],
            backgroundColor:['tomato','orange','dodgerblue','slateblue','violet']
            }
        ]
    },
    options: {
        scales:{
           yAxes:[{
               ticks:{
                   beginAtZero: true
               }
           }]
        }
    }
})


bridges.forEach(function (bridges){
    chart.data.labels.push(bridges.name)
    chart.data.datasets[0].data.push(bridges.span)

    chart.update()

})