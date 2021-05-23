$(document).ready(function(){
    $('.dropdown-toggle').dropdown();
    $('.search-query').keyup(function(){
        if($(this).val() == ''){
            $('.results').hide();
        }else{
            $('.results').show();
        }
    });
    
    $('.giris').submit(function(){
        var Kullanici = $(this).find('input[type=email]').val();
        var sifre = $(this).find('input[type=password]').val();
        if(Kullanici == '' || sifre == ''){
            if(Kullanici == ''){
                alert('Lütfen Kullanıcı ad giriniz');
            }
            if(sifre == ''){
                alert('Lütfen Şifre giriniz');
            }
            return false;
        }
    });
    $('button[silme]').on('click', function(){
        if(confirm('Sil onaylama ister misiniz')){
            $(this).parents('tr').remove();
        }
    });
});

angular.module("myApp", []).controller('search', function($scope) {
    $scope.degerler = [
        'Sonuc 1',
        'Sonuc 2',
        'Margareth',
        'Hege',
        'Joe',
        'Gustav',
        'Birgit',
        'Mary',
        'Kai'
    ];
});;