var myApp = angular.module("myApp", []);

myApp.controller('CommentsCtrl', ['$scope', function($scope){

    console.log($scope);
    
    $scope.comments = 
    [{
            "username": "Dickerson",
            "city": "Hackneyville",
            "email": "dickersonduke@imageflow.com",
            "content": "Eu Lorem aliquip sit velit incididunt. Ullamco laboris ut in reprehenderit amet incididunt proident id magna incididunt Lorem consectetur veniam. Laboris eu sunt id fugiat ea ut enim excepteur aliqua deserunt culpa cillum reprehenderit fugiat. Eiusmod officia in tempor exercitation enim amet excepteur esse amet reprehenderit magna officia. Ipsum ea officia eu pariatur minim sit est consequat ea esse nostrud veniam."
        },
        {
            "username": "Fuentes",
            "city": "Rehrersburg",
            "email": "fuentesduke@imageflow.com",
            "content": "Culpa magna duis sit elit proident commodo cupidatat minim consequat cupidatat culpa. Cupidatat nulla voluptate commodo occaecat velit nostrud ea irure est. Irure esse laboris ullamco eu consectetur. Reprehenderit incididunt commodo et excepteur occaecat laboris ea anim sit tempor et. Adipisicing aliqua officia sunt quis ad."
        },
        {
            "username": "Marietta",
            "city": "Springhill",
            "email": "mariettaduke@imageflow.com",
            "content": "Ullamco ullamco elit consequat fugiat irure consectetur nostrud exercitation. Officia exercitation proident enim est mollit. Exercitation cupidatat quis fugiat pariatur quis. Ipsum eu sint pariatur officia sunt quis mollit veniam voluptate cillum mollit. Laboris quis ipsum qui laboris nisi id culpa amet non."
        },
        {
            "username": "Cynthia",
            "city": "Nanafalia",
            "email": "cynthiaduke@imageflow.com",
            "content": "Est amet duis culpa ut labore exercitation officia cillum proident do sit. Tempor qui proident nisi mollit qui commodo proident do aute fugiat est commodo reprehenderit magna. Aute exercitation ex est duis minim dolor. Nisi est excepteur ullamco ut officia mollit incididunt mollit reprehenderit minim excepteur minim do nisi. Nostrud deserunt cillum consequat ad aliqua minim minim in enim aute esse deserunt ad."
        },
        {
            "username": "Reyna",
            "city": "Talpa",
            "email": "reynaduke@imageflow.com",
            "content": "Elit ex irure ex elit ut laborum. Labore in eiusmod irure culpa exercitation irure nisi velit officia exercitation est enim. Ipsum aliquip incididunt ad dolore commodo exercitation mollit eiusmod. Id proident esse qui fugiat duis aliqua non exercitation est dolore cupidatat exercitation. Do exercitation ipsum proident labore."
        },
        {
            "username": "Brittney",
            "city": "Ferney",
            "email": "brittneyduke@imageflow.com",
            "content": "Amet eiusmod occaecat non ipsum duis occaecat mollit magna reprehenderit veniam. Ullamco sint incididunt est culpa officia nostrud exercitation qui adipisicing laborum nisi. Occaecat pariatur incididunt fugiat excepteur anim sit Lorem velit tempor id. Mollit fugiat do pariatur do consequat qui. Ut laboris tempor fugiat nostrud dolore deserunt irure adipisicing."
        },
        {
            "username": "Henrietta",
            "city": "Bethany",
            "email": "henriettaduke@imageflow.com",
            "content": "Ullamco tempor esse nisi reprehenderit consectetur est anim incididunt mollit elit veniam ex aliqua. Excepteur tempor anim do ea. Tempor exercitation eu ut nulla ullamco duis fugiat aliqua. Id qui do minim esse sit sunt eu elit irure proident commodo ut. Officia adipisicing proident nostrud non proident est cillum."
        }
    ]
    
}]);