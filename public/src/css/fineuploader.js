/* ---------------------------------------
/* Fine Uploader Styles
/* ---------------------------------------

/* Buttons
------------------------------------------ */
.qq-btn
{
    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.37) inset,
                1px 0 1px rgba(255, 255, 255, 0.07) inset,
                0 1px 0 rgba(0, 0, 0, 0.36),
                0 -2px 12px rgba(0, 0, 0, 0.08) inset;
    padding: 3px 4px;
    border: 1px solid #CCCCCC;
    border-radius: 2px;
    color: inherit;
    background-color: #FFFFFF;
}
.qq-upload-delete, .qq-upload-pause, .qq-upload-continue {
    display: inline;
}
.qq-upload-delete
{
    background-color: #e65c47;
    color: #FAFAFA;
    border-color: #dc523d;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.55);
}
.qq-upload-delete:hover {
    background-color: #f56b56;
 }
.qq-upload-cancel
{
    background-color: #F5D7D7;
    border-color: #e6c8c8;
}
.qq-upload-cancel:hover {
    background-color: #ffe1e1;
}
.qq-upload-retry
{
    background-color: #EBF6E0;
    border-color: #d2ddc7;
}
.qq-upload-retry:hover {
    background-color: #f7ffec;
}
.qq-upload-pause, .qq-upload-continue {
    background-color: #00ABC7;
    color: #FAFAFA;
    border-color: #2dadc2;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.55);
}
.qq-upload-pause:hover, .qq-upload-continue:hover {
    background-color: #0fbad6;
}

/* Upload Button
------------------------------------------ */
.qq-upload-button {
    display: inline;
    width: 105px;
    margin-bottom: 10px;
    padding: 7px 10px;
    text-align: center;
    float: left;
    background: #00ABC7;
    color: #FFFFFF;
    border-radius: 2px;
    border: 1px solid #2dadc2;
    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.37) inset,
                1px 0 1px rgba(255, 255, 255, 0.07) inset,
                0 1px 0 rgba(0, 0, 0, 0.36),
                0 -2px 12px rgba(0, 0, 0, 0.08) inset;
}
.qq-upload-button-hover {
    background: #33B6CC;
}
.qq-upload-button-focus {
    outline: 1px dotted #000000;
}


/* Drop Zone
------------------------------------------ */
.qq-uploader {
    position: relative;
    min-height: 200px;
    max-height: 490px;
    overflow-y: hidden;
    width: inherit;
    border-radius: 6px;
    background-color: #FDFDFD;
    border: 1px dashed #CCCCCC;
    padding: 20px;
}
.qq-uploader:before {
    content: attr(qq-drop-area-text) " ";
    position: absolute;
    font-size: 200%;
    left: 0;
    width: 100%;
    text-align: center;
    top: 45%;
    opacity: 0.25;
}
.qq-upload-drop-area, .qq-upload-extra-drop-area {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    min-height: 30px;
    z-index: 2;
    background: #F9F9F9;
    border-radius: 4px;
    border: 1px dashed #CCCCCC;
    text-align: center;
}
.qq-upload-drop-area span {
    display: block;
    position: absolute;
    top: 50%;
    width: 100%;
    margin-top: -8px;
    font-size: 16px;
}
.qq-upload-extra-drop-area {
    position: relative;
    margin-top: 50px;
    font-size: 16px;
    padding-top: 30px;
    height: 20px;
    min-height: 40px;
}
.qq-upload-drop-area-active {
    background: #FDFDFD;
    border-radius: 4px;
    border: 1px dashed #CCCCCC;
}
.qq-upload-list {
    margin: 0;
    padding: 0;
    list-style: none;
    max-height: 450px;
    overflow-y: auto;
    box-shadow: 0px 1px 0px rgba(15, 15, 50, 0.14);
    clear: both;
}


/* Uploaded Elements
------------------------------------------ */
.qq-upload-list li {
    margin: 0;
    padding: 9px;
    line-height: 15px;
    font-size: 16px;
    color: #424242;
    background-color: #F6F6F6;
    border-top: 1px solid #FFFFFF;
    border-bottom: 1px solid #DDDDDD;
}
.qq-upload-list li:first-child {
    border-top: none;
}
.qq-upload-list li:last-child {
    border-bottom: none;
}

.qq-upload-file, .qq-upload-spinner, .qq-upload-size,
.qq-upload-cancel, .qq-upload-retry, .qq-upload-failed-text,
.qq-upload-delete, .qq-upload-pause, .qq-upload-continue {
    margin-right: 12px;
    display: inline;
}
.qq-upload-file {
    vertical-align: middle;
    display: inline-block;
    width: 300px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow-x: hidden;
    height: 18px;
}
.qq-upload-spinner {
    display: inline-block;
    background: url("loading.gif");
    width: 15px;
    height: 15px;
    vertical-align: text-bottom;
}
.qq-drop-processing {
    display: block;
}
.qq-drop-processing-spinner {
    display: inline-block;
    background: url("processing.gif");
    width: 24px;
    height: 24px;
    vertical-align: text-bottom;
}
.qq-upload-size, .qq-upload-cancel, .qq-upload-retry,
.qq-upload-delete, .qq-upload-pause, .qq-upload-continue {
    font-size: 12px;
    font-weight: normal;
    cursor: pointer;
    vertical-align: middle;
}
.qq-upload-status-text {
    font-size: 14px;
    font-weight: bold;
    display: block;
}
.qq-upload-failed-text {
    display: none;
    font-style: italic;
    font-weight: bold;
}
.qq-upload-failed-icon {
    display:none;
    width:15px;
    height:15px;
    vertical-align:text-bottom;
}
.qq-upload-fail .qq-upload-failed-text {
    display: inline;
}
.qq-upload-retrying .qq-upload-failed-text {
    display: inline;
}
.qq-upload-list li.qq-upload-success {
    background-color: #EBF6E0;
    color: #424242;
    border-bottom: 1px solid #D3DED1;
    border-top: 1px solid #F7FFF5;
}
.qq-upload-list li.qq-upload-fail {
    background-color: #F5D7D7;
    color: #424242;
    border-bottom: 1px solid #DECACA;
    border-top: 1px solid #FCE6E6;
}
.qq-progress-bar {
    display: block;
    display: block;
    background: #00abc7;
    width: 0%;
    height: 15px;
    border-radius: 6px;
    margin-bottom: 3px;
}

.qq-total-progress-bar {
    height: 25px;
    border-radius: 9px;
}

.qq-total-progress-bar-container {
    margin-left: 9px;
    display: inline;
    float: right;
    width: 500px;
}

INPUT.qq-edit-filename {
    position: absolute;
    opacity: 0;
    filter: alpha(opacity=0);
    z-index: -1;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
}

.qq-upload-file.qq-editable {
    cursor: pointer;
    margin-right: 4px;
}

.qq-edit-filename-icon.qq-editable {
    display: inline-block;
    cursor: pointer;
}

INPUT.qq-edit-filename.qq-editing {
    position: static;
    height: 28px;
    padding: 0 8px;
    margin-right: 10px;
    margin-bottom: -5px;
    border: 1px solid #ccc;
    border-radius: 2px;
    font-size: 16px;

    opacity: 1;
    filter: alpha(opacity=100);
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
}

.qq-edit-filename-icon {
    display: none;
    background: url("edit.gif");
    width: 15px;
    height: 15px;
    vertical-align: text-bottom;
    margin-right: 16px;
}

.qq-hide {
    display: none;
}


/* Thumbnail
------------------------------------------ */
.qq-thumbnail-selector {
    vertical-align: middle;
    margin-right: 12px;
}


/* <dialog> element styles */
.qq-uploader DIALOG {
    display: none;
}

.qq-uploader DIALOG[open] {
    display: block;
}

.qq-uploader DIALOG {
    display: none;
}

.qq-uploader DIALOG[open] {
    display: block;
}

.qq-uploader DIALOG .qq-dialog-buttons {
    text-align: center;
    padding-top: 10px;
}

.qq-uploader DIALOG .qq-dialog-buttons BUTTON {
    margin-left: 5px;
    margin-right: 5px;
}

.qq-uploader DIALOG .qq-dialog-message-selector {
    padding-bottom: 10px;
}

.qq-uploader DIALOG::backdrop {
    background-color: rgba(0, 0, 0, 0.7);
}
.qq-uploader{position:relative;width:100%}.qq-upload-button{display:block;width:105px;padding:7px 0;text-align:center;background:#800;border-bottom:1px solid #ddd;color:#fff}.qq-upload-button-hover{background:#c00}.qq-upload-button-focus{outline:1px dotted #000}.qq-upload-drop-area,.qq-upload-extra-drop-area{position:absolute;top:0;left:0;width:100%;height:100%;min-height:30px;z-index:2;background:#ff9797;text-align:center}.qq-upload-drop-area span{display:block;position:absolute;top:50%;width:100%;margin-top:-8px;font-size:16px}.qq-upload-extra-drop-area{position:relative;margin-top:50px;font-size:16px;padding-top:30px;height:20px;min-height:40px}.qq-upload-drop-area-active{background:#ff7171}.qq-upload-list{margin:0;padding:0;list-style:none}.qq-upload-list li{margin:0;padding:9px;line-height:15px;font-size:16px;background-color:#fff0bd}.qq-upload-cancel,.qq-upload-continue,.qq-upload-delete,.qq-upload-failed-text,.qq-upload-file,.qq-upload-pause,.qq-upload-retry,.qq-upload-size,.qq-upload-spinner{margin-right:12px;display:inline}.qq-upload-spinner{display:inline-block;background:url(loading.gif);width:15px;height:15px;vertical-align:text-bottom}.qq-drop-processing{display:block}.qq-drop-processing-spinner{display:inline-block;background:url(processing.gif);width:24px;height:24px;vertical-align:text-bottom}.qq-upload-continue,.qq-upload-delete,.qq-upload-pause{display:inline}.qq-upload-cancel,.qq-upload-continue,.qq-upload-delete,.qq-upload-pause,.qq-upload-retry{color:#000}.qq-upload-cancel,.qq-upload-continue,.qq-upload-delete,.qq-upload-pause,.qq-upload-retry,.qq-upload-size{font-size:12px;font-weight:400}.qq-upload-failed-text{display:none;font-style:italic;font-weight:700}.qq-upload-failed-icon{display:none;width:15px;height:15px;vertical-align:text-bottom}.qq-upload-fail .qq-upload-failed-text{display:inline}.qq-upload-retrying .qq-upload-failed-text{display:inline;color:#d60000}.qq-upload-list li.qq-upload-success{background-color:#5da30c;color:#fff}.qq-upload-list li.qq-upload-fail{background-color:#d60000;color:#fff}.qq-progress-bar{display:block;background:-moz-linear-gradient(top,rgba(30,87,153,1) 0,rgba(41,137,216,1) 50%,rgba(32,124,202,1) 51%,rgba(125,185,232,1) 100%);background:-webkit-gradient(linear,left top,left bottom,color-stop(0,rgba(30,87,153,1)),color-stop(50%,rgba(41,137,216,1)),color-stop(51%,rgba(32,124,202,1)),color-stop(100%,rgba(125,185,232,1)));background:-webkit-linear-gradient(top,rgba(30,87,153,1) 0,rgba(41,137,216,1) 50%,rgba(32,124,202,1) 51%,rgba(125,185,232,1) 100%);background:-o-linear-gradient(top,rgba(30,87,153,1) 0,rgba(41,137,216,1) 50%,rgba(32,124,202,1) 51%,rgba(125,185,232,1) 100%);background:-ms-linear-gradient(top,rgba(30,87,153,1) 0,rgba(41,137,216,1) 50%,rgba(32,124,202,1) 51%,rgba(125,185,232,1) 100%);background:linear-gradient(to bottom,rgba(30,87,153,1) 0,rgba(41,137,216,1) 50%,rgba(32,124,202,1) 51%,rgba(125,185,232,1) 100%);width:0;height:15px;border-radius:6px;margin-bottom:3px}.qq-total-progress-bar{height:25px;border-radius:9px}.qq-total-progress-bar-container{margin:9px}INPUT.qq-edit-filename{position:absolute;opacity:0;z-index:-1}.qq-upload-file.qq-editable{cursor:pointer}.qq-edit-filename-icon.qq-editable{display:inline-block;cursor:pointer}INPUT.qq-edit-filename.qq-editing{position:static;margin-top:-5px;margin-right:10px;margin-bottom:-5px;opacity:1}.qq-edit-filename-icon{display:none;background:url(edit.gif);width:15px;height:15px;vertical-align:text-bottom;margin-right:5px}.qq-hide{display:none}.qq-uploader DIALOG{display:none}.qq-uploader DIALOG[open]{display:block}.qq-uploader DIALOG{display:none}.qq-uploader DIALOG[open]{display:block}.qq-uploader DIALOG .qq-dialog-buttons{text-align:center;padding-top:10px}.qq-uploader DIALOG .qq-dialog-buttons BUTTON{margin-left:5px;margin-right:5px}.qq-uploader DIALOG .qq-dialog-message-selector{padding-bottom:10px}.qq-uploader DIALOG::backdrop{background-color:rgba(0,0,0,.7)}/*# sourceMappingURL=fine-uploader.min.css.map */