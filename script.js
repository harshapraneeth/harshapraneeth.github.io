var colors = [
    "#ff514a",
    "#ff9736",
    "#ffa453",
    "#ffae9d",
    "#ade0bf",
    "#95cfb9",
    "#95bacf",
    "#718ad2",
    "#577eed"
];

var lists = {
    "education-list":
    [
        [
            "Master's Degree | Grade: 70% | 2019-2021",
            [
                ["Logical and Theoretical Foundations of CS", colors[0]],
                ["Advanced Programming (Pre-Master)", colors[1]],
                ["Synchronous Languages", colors[2]],
                ["Internet of things and Wireless networks", colors[3]],
                ["Block chain and Robotic process automation", colors[4]],
                ["Knowledge discovery and Data mining", colors[5]],
                ["Combinatorics on Words", colors[6]],
                ["Distributed Systems", colors[7]],
                ["German A1.1", colors[8]],
                ["Seminar Data science", colors[0]],
                ["Cryptography", colors[1]],
                ["Neural networks and Deep learning", colors[2]]
            ]
        ],
        [
            "Bachelor's Degree | Grade: 80% | 2015-2019",
            [
                ["Machine Learning", colors[0]],
                ["C Programming", colors[1]],
                ["Object oriented programming", colors[2]],
                ["Mobile application development", colors[3]],
                ["Cloud computing", colors[4]],
                ["Problem solving and Reasoning", colors[5]],
                ["Fuzzy sets", colors[6]],
                ["Robotics", colors[7]],
                ["Artificial Intelligence", colors[8]],
                ["Engineering Drawing", colors[0]],
                ["Functional English", colors[1]],
                ["Internet Technologies", colors[2]]
            ]
        ],
        [
            "Junior College | Grade: 97% | 2013-2015",
            [
                ["Logical and Theoretical Foundations of CS", colors[0]],
                ["Advanced Programming (Pre-Master)", colors[1]],
                ["Synchronous Languages", colors[2]],
                ["Internet of things and Wireless networks", colors[3]],
                ["Block chain and Robotic process automation", colors[4]],
                ["Knowledge discovery and Data mining", colors[5]],
                ["Combinatorics on Words", colors[6]],
                ["Distributed Systems", colors[7]],
                ["German A1.1", colors[8]],
                ["Seminar Data science", colors[0]],
                ["Cryptography", colors[1]],
                ["Neural networks and Deep learning", colors[2]]
            ]
        ]
    ],

    "skills-list":
    [
        [
            "Programming",
            [
                ["Logical and Theoretical Foundations of CS", colors[0]],
                ["Advanced Programming (Pre-Master)", colors[1]],
                ["Synchronous Languages", colors[2]],
                ["Internet of things and Wireless networks", colors[3]],
                ["Block chain and Robotic process automation", colors[4]],
                ["Knowledge discovery and Data mining", colors[5]],
                ["Combinatorics on Words", colors[6]],
                ["Distributed Systems", colors[7]],
                ["German A1.1", colors[8]],
                ["Seminar Data science", colors[0]],
                ["Cryptography", colors[1]],
                ["Neural networks and Deep learning", colors[2]]
            ]
        ],
        [
            "Machine learning Engineering",
            [
                ["Machine Learning", colors[0]],
                ["C Programming", colors[1]],
                ["Object oriented programming", colors[2]],
                ["Mobile application development", colors[3]],
                ["Cloud computing", colors[4]],
                ["Problem solving and Reasoning", colors[5]],
                ["Fuzzy sets", colors[6]],
                ["Robotics", colors[7]],
                ["Artificial Intelligence", colors[8]],
                ["Engineering Drawing", colors[0]],
                ["Functional English", colors[1]],
                ["Internet Technologies", colors[2]]
            ]
        ],
        [
            "Web development",
            [
                ["Logical and Theoretical Foundations of CS", colors[0]],
                ["Advanced Programming (Pre-Master)", colors[1]],
                ["Synchronous Languages", colors[2]],
                ["Internet of things and Wireless networks", colors[3]],
                ["Block chain and Robotic process automation", colors[4]],
                ["Knowledge discovery and Data mining", colors[5]],
                ["Combinatorics on Words", colors[6]],
                ["Distributed Systems", colors[7]],
                ["German A1.1", colors[8]],
                ["Seminar Data science", colors[0]],
                ["Cryptography", colors[1]],
                ["Neural networks and Deep learning", colors[2]]
            ]
        ],
        [
            "Android application development",
            [
                ["Logical and Theoretical Foundations of CS", colors[0]],
                ["Advanced Programming (Pre-Master)", colors[1]],
                ["Synchronous Languages", colors[2]],
                ["Internet of things and Wireless networks", colors[3]],
                ["Block chain and Robotic process automation", colors[4]],
                ["Knowledge discovery and Data mining", colors[5]],
                ["Combinatorics on Words", colors[6]],
                ["Distributed Systems", colors[7]],
                ["German A1.1", colors[8]],
                ["Seminar Data science", colors[0]],
                ["Cryptography", colors[1]],
                ["Neural networks and Deep learning", colors[2]]
            ]
        ],
        [
            "Office utilities",
            [
                ["Logical and Theoretical Foundations of CS", colors[0]],
                ["Advanced Programming (Pre-Master)", colors[1]],
                ["Synchronous Languages", colors[2]],
                ["Internet of things and Wireless networks", colors[3]],
                ["Block chain and Robotic process automation", colors[4]],
                ["Knowledge discovery and Data mining", colors[5]],
                ["Combinatorics on Words", colors[6]],
                ["Distributed Systems", colors[7]],
                ["German A1.1", colors[8]],
                ["Seminar Data science", colors[0]],
                ["Cryptography", colors[1]],
                ["Neural networks and Deep learning", colors[2]]
            ]
        ]
    ]
};

var menu_list = [
    ["Education", "education.html"], 
    ["Skills", "skills.html"], 
    ["Projects", "projects.html"], 
    ["Achievements", "achievements.html"], 
    ["Hobbies", "hobbies.html"], 
    ["Contact", "contact.html"]
];

function load_list(id)
{
    var container = document.getElementById(id);
    if(container==undefined) return;
    x = "";
    for(var i=0; i<lists[id].length; i++)
    {
        x += "<div class='list-item'> <p class='list-item-title' onclick=\"expand_list_item('"+id+"', "+i+")\">"+lists[id][i][0]+"</p> <div class='"+id+" list-item-content'> ";
        for(var j=0; j<lists[id][i][1].length; j++)
        {
            x += "<div class='list-item-content-item' style=\"background-color:"+lists[id][i][1][j][1]+"\">"+lists[id][i][1][j][0]+"</div>";
        }
        x += " </div> </div>";
    }
    container.innerHTML = x;
}

function load_menu(n)
{
    var menu = document.getElementById("header-menu");
    x = "";
    for(var i=0; i<menu_list.length; i++)
    {
        if(i==n) x += "<div class='header-menu-option'> <a href=\""+menu_list[i][1]+"\" style=\"font-weight: bold;\">"+menu_list[i][0]+"</a> </div>";
        else x += "<div class='header-menu-option'> <a href=\""+menu_list[i][1]+"\">"+menu_list[i][0]+"</a> </div>";
    }
    menu.innerHTML = x;
}

function expand_list_item(c,n)
{
    var list_item = document.getElementsByClassName(c)[n];
    if(list_item!=undefined)list_item.classList.toggle('show-list-content');
}