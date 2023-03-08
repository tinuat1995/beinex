class jsonData {
    data : any = [
        {
          title : 'Total Number of Tasks',
          value:45,
          percentage : 20
          // icon:
        },
        {
          title : 'Number of tasks on track',
          value:10,
          percentage : 50
          // icon:
        },
        {
          title : 'Number of tasks delayed',
          value:24,
          percentage : 70
          // icon:
        },
        {
          title : 'Number of tasks completed',
          value:54,
          percentage : 30
          // icon:
        },
      ]
    
       donutChartData :any = [
        { name: 'Category A', value: 30 },
        { name: 'Category B', value: 70 },
       
      ];
    
      stackedBarChartData: any[] = [
        {State: 'AL', 'Under 5 Years': 310504, '5 to 13 Years': 552339, '14 to 17 Years': 259034, '18 to 24 Years': 450818, },
        {State: 'AK', 'Under 5 Years': 52083, '5 to 13 Years': 85640, '14 to 17 Years': 42153, '18 to 24 Years': 74257, },
        {State: 'AZ', 'Under 5 Years': 515910, '5 to 13 Years': 828669, '14 to 17 Years': 362642, '18 to 24 Years': 601943, },
        {State: 'AR', 'Under 5 Years': 202070, '5 to 13 Years': 343207, '14 to 17 Years': 157204, '18 to 24 Years': 264160, },
    ];
    
    secondData :any = [
        { category: 'Category 1', segment1: 10, segment2: 30, segment3: 30 }, 
        { category: 'Category 2', segment1: 15, segment2: 25, segment3: 35 }, 
        { category: 'Category 3', segment1: 20, segment2: 30, segment3: 40 }, 
        
      ];
}

export const chartData = new jsonData()