$(function() {
  var data = {
    '國小': ['馬克一號', 'Smart'],
    '國中': ['馬克一號', 'Smart'],
    '高中': ['馬克一號', 'Smart', 'Webduino Fly'],
    '大學': ['馬克一號', 'Smart', 'Webduino Fly'],
    '研究所': ['馬克一號', 'Smart', 'Webduino Fly'],
    '網頁工程師': ['馬克一號', 'Smart'],
    '設計師': ['馬克一號', 'Smart'],
    '物聯網體驗': ['Smart'],
    '程式學習': ['馬克一號', 'Smart'],
    '基礎應用': ['馬克一號', 'Smart'],
    '進階應用': ['馬克一號', 'Smart', 'Webduino Fly'],
    '智慧生活': ['馬克一號', 'Smart', 'Webduino Fly'],
    '玩具改造': ['馬克一號', 'Smart'],
    '物聯網開發': ['馬克一號', 'Smart', 'Webduino Fly'],
    'APP 開發': ['馬克一號', 'Smart']
  };
  var data2 = {
    '國小': ['基本包', 'Dr.Smart', '公仔自走車', '公仔自走車循跡套件', '基礎套件包'],
    '國中': ['基本包', 'Dr.Smart', '智慧植栽', '公仔自走車', '公仔自走車循跡套件', '基礎套件包', '進階套件包'],
    '高中': ['基本包', '威力加強包', 'Dr.Smart', '智慧植栽', '智慧插座', '公仔自走車', '公仔自走車循跡套件', '豪華套件包', '基礎套件包', '進階套件包', '高階套件包'],
    '大學': ['威力加強包', '智慧插座實戰開發包', '智慧植栽', '智慧插座', '智慧插座擴充', '豪華套件包', '進階套件包', '高階套件包'],
    '研究所': ['威力加強包', '智慧插座實戰開發包', '智慧植栽', '智慧插座', '智慧插座擴充', '豪華套件包'],
    '網頁工程師': ['基本包', '威力加強包', 'Dr.Smart', '基礎套件包'],
    '設計師': ['基本包', 'Dr.Smart', '基礎套件包'],
    '物聯網體驗': ['Dr.Smart'],
    '程式學習': ['基本包', '威力加強包', 'Dr.Smart', '基礎套件包'],
    '基礎應用': ['基本包', '威力加強包', 'Dr.Smart', '公仔自走車', '公仔自走車循跡套件', '基礎套件包'],
    '進階應用': ['智慧插座實戰開發包', '智慧植栽', '智慧插座', '智慧插座擴充', '豪華套件包', '進階套件包', '高階套件包'],
    '智慧生活': ['智慧插座實戰開發包', '智慧植栽', '豪華套件包'],
    '玩具改造': ['公仔自走車', '公仔自走車循跡套件', '進階套件包'],
    '物聯網開發': ['智慧插座實戰開發包', '智慧植栽', '智慧插座', '智慧插座擴充', '豪華套件包'],
    'APP 開發': ['基本包', 'Dr.Smart']
  };
  var data3 = {
    '國小': ['Blockly', '模擬器'],
    '國中': ['Blockly', '模擬器'],
    '高中': ['Blockly (註冊版)', 'HyProto', '模擬器'],
    '大學': ['Blockly (註冊版)', '裝置管理 (註冊版)', 'HyProto (註冊版)', 'Node-RED (註冊版)'],
    '研究所': ['Blockly (註冊版)', '裝置管理 (註冊版)', 'HyProto (註冊版)', 'Node-RED (註冊版)'],
    '網頁工程師': ['Blockly (註冊版)', 'HyProto (註冊版)', 'Node-RED (註冊版)'],
    '設計師': ['Blockly', 'HyProto'],
    '物聯網體驗': ['Blockly'],
    '程式學習': ['Blockly', 'HyProto'],
    '基礎應用': ['Blockly', '模擬器', 'HyProto'],
    '進階應用': ['Blockly (註冊版)', '裝置管理 (註冊版)', 'HyProto (註冊版)', 'Node-RED (註冊版)'],
    '智慧生活': ['Blockly (註冊版)', '裝置管理 (註冊版)', 'Node-RED (註冊版)'],
    '玩具改造': ['Blockly (註冊版)', '裝置管理 (註冊版)', 'HyProto'],
    '物聯網開發': ['Blockly (註冊版)', '裝置管理 (註冊版)', 'Node-RED (註冊版)'],
    'APP 開發': ['Blockly', 'HyProto (註冊版)', 'Node-RED (註冊版)']
  };
  var link = {
    '馬克一號': 'https://webduino.io/buy/component-webduino-v1.html',
    'Smart': 'https://webduino.io/buy/component-webduino-smart.html',
    'Webduino Fly': 'https://webduino.io/buy/component-webduino-fly.html',
    '基本包': 'https://webduino.io/buy/webduino-developer-a.html',
    '威力加強包': 'https://webduino.io/buy/webduino-developer-b.html',
    'Dr.Smart': 'https://webduino.io/buy/webduino-developer-drsmart.html',
    '智慧植栽': 'https://webduino.io/buy/webduino-package-plant.html',
    '智慧插座': 'https://webduino.io/buy/webduino-package-socket.html',
    '智慧插座擴充': 'https://webduino.io/buy/webduino-package-socket-extension.html',
    '智慧插座實戰開發包': 'https://webduino.io/buy/webduino-developer-smart-socket.html',
    '公仔自走車': 'https://webduino.io/buy/webduino-package-toycar.html',
    '公仔自走車循跡套件': 'https://webduino.io/buy/webduino-package-line-following.html',
    '基礎套件包': 'https://webduino.io/buy/webduino-components-facile-package.html',
    '進階套件包': 'https://webduino.io/buy/webduino-components-standard-package.html',
    '高階套件包': 'https://webduino.io/buy/webduino-components-excellent-package.html',
    '豪華套件包': 'https://webduino.io/buy/webduino-package-all.html',
    'Blockly': 'https://blockly.webudino.io',
    '模擬器': 'http://simulator.webduino.io/',
    'HyProto': 'https://hypro.to'
  };
  var $checkBox = $('.checkbox');
  var $label = $('label');

  $label.on('click',function() {
    if ($(this).hasClass('checked')) {
      $(this).removeClass('checked');
    } else {
      $(this).addClass('checked');
    }
  });

  $checkBox.on('change', function(event) {

    // 一開始先清空顯示區域
    $('.a').html('');
    var arr = [];
    var arr2 = [];
    var arr3 = [];
    var resultArr = {};
    var resultArr2 = {};
    var resultArr3 = {};
    var counts = {};
    var counts2 = {};
    var counts3 = {};

    // 把 checkbox 的資訊對應到內容，篩選對應的內容放入陣列
    $checkBox.each(function() {
      var $this = $(this);
      var $val = $this.val();
      if ($this.is(':checked')) {
        for (var i in data) {
          if ($val == i) {
            arr = arr.concat(data[i]);
          }
        }
        for (var i in data2) {
          if ($val == i) {
            arr2 = arr2.concat(data2[i]);
          }
        }
        for (var i in data3) {
          if ($val == i) {
            arr3 = arr3.concat(data3[i]);
          }
        }
      }
    });

    // 判斷同一種產品出現了幾次
    arr.forEach(function(item) {
      if (counts[item]) {
        counts[item] = counts[item] + 1;
      } else {
        counts[item] = 1;
      }
    });
    arr2.forEach(function(item) {
      if (counts2[item]) {
        counts2[item] = counts2[item] + 1;
      } else {
        counts2[item] = 1;
      }
    });
    arr3.forEach(function(item) {
      if (counts3[item]) {
        counts3[item] = counts3[item] + 1;
      } else {
        counts3[item] = 1;
      }
    });

    // 把結果放到結果陣列中
    for (var j in counts) {
      if (resultArr[counts[j]]) {
        resultArr[counts[j]].push(j);
      } else {
        resultArr[counts[j]] = [j];
      }
    }
    for (var j in counts2) {
      if (resultArr2[counts2[j]]) {
        resultArr2[counts2[j]].push(j);
      } else {
        resultArr2[counts2[j]] = [j];
      }
    }
    for (var j in counts3) {
      if (resultArr3[counts3[j]]) {
        resultArr3[counts3[j]].push(j);
      } else {
        resultArr3[counts3[j]] = [j];
      }
    }

    // 依據出現結果的次數，產生對應的推薦結果
    for (var k in resultArr) {
      resultArr[k].forEach(function(item) {
        if (k > 3) {
          $('.box1 .a3').append('<a href="#">' + item + '</a>');
        } else if (k == 3 || k == 2) {
          $('.box1 .a2').append('<a href="#">' + item + '</a>');
        } else {
          $('.box1 .a1').append('<a href="#">' + item + '</a>');
        }
      });
    }
    for (var k in resultArr2) {
      resultArr2[k].forEach(function(item) {
        if (k > 3) {
          $('.box2 .a3').append('<a href="#">' + item + '</a>');
        } else if (k == 3 || k == 2) {
          $('.box2 .a2').append('<a href="#">' + item + '</a>');
        } else {
          $('.box2 .a1').append('<a href="#">' + item + '</a>');
        }
      });
    }
    for (var k in resultArr3) {
      resultArr3[k].forEach(function(item) {
        if (k > 3) {
          $('.box3 .a3').append('<a href="#">' + item + '</a>');
        } else if (k == 3 || k == 2) {
          $('.box3 .a2').append('<a href="#">' + item + '</a>');
        } else {
          $('.box3 .a1').append('<a href="#">' + item + '</a>');
        }
      });
    }

    // 依據推薦的結果加上 style
    $('.a1').removeClass('s1').removeClass('s2');
    $('.a1').each(function() {
      var p2 = $(this).parent().children('.a2').text();
      var p3 = $(this).parent().children('.a3').text();
      if (p2.length > 0 && p3.length > 0) {
        $(this).addClass('s1');
      } else if (p2.length > 0 && p3.length == 0) {
        $(this).addClass('s2');
      } else if (p2.length == 0 && p3.length > 0) {
        $(this).addClass('s2');
      }
    });
    $('.a2').removeClass('s1');
    $('.a2').each(function() {
      var p3 = $(this).parent().children('.a3').text();
      if (p3.length > 0) {
        $(this).addClass('s1');
      }
    });

    // 沒有結果的不顯示
    $('.a').each(function() {
      if ($(this).text().length < 1) {
        $(this).hide();
      } else {
        $(this).show();
      };
    });

    // 篩選出來的結果加上對應的連結
    $('a').each(function() {
      var $this = $(this);
      if (link[$this.text()]) {
        $this.attr('href', link[$this.text()]).attr('target', '_blank');
      } else {
        $this.attr('href', 'https://cloud.webduino.io').attr('target', '_blank');
      }
    });

  });
});
