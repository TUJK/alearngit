// ת���ַ�
function params(data) {
    var arr = [];
    for (var i in data) {
        arr.push(encodeURIComponent(i) + "=" + encodeURIComponent(data[i]));
    }
    return arr.join("&");
}

// ��װajax
function ajax(obj) {
    var xhr = new XMLHttpRequest(); // ������IE6�����
    obj.url = obj.url + "?rand=" + Math.random(); // �������
    obj.data = params(obj.data);      // ת���ַ���
    if (obj.method === "get") {      // �ж�ʹ�õ��Ƿ���get��ʽ����
        obj.url += obj.url.indexOf("?") == "-1" ? "?" + obj.data : "&" + obj.data;
    }
    // �첽
    if (obj.async === true) {
        // �첽��ʱ����Ҫ����onreadystatechange�¼�
        xhr.onreadystatechange = function () {
            // ִ�����
            if (xhr.readyState == 4) {
                callBack();
            }
        }
    }
    xhr.open(obj.method, obj.url, obj.async);  // false��ͬ�� true���첽 // "demo.php?rand="+Math.random()+"&name=ga&ga",
    if (obj.method === "post") {
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(obj.data);
    } else {
        xhr.send(null);
    }
    // xhr.abort(); // ȡ���첽����
    // ͬ��
    if (obj.async === false) {
        callBack();
    }
    // ��������
    function callBack() {
        // �ж��Ƿ񷵻���ȷ
        if (xhr.status == 200) {
            obj.success(xhr.responseText);
        } else {
            obj.Error("��ȡ����ʧ�ܣ��������Ϊ��" + xhr.status + "������ϢΪ��" + xhr.statusText);
        }
    }
}
