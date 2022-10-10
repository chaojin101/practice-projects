"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const url = "https://api.thecatapi.com/v1/images/search";
const button = document.querySelector("button");
const tableBody = document.querySelector("#table-body");
class Cat {
    constructor(id, url, width, height) {
        this.id = id;
        this.url = url;
        this.width = width;
        this.height = height;
    }
}
class WebDisplay {
    static addData(data) {
        const cat = new Cat(data.id, data.url, data.width, data.height);
        const tableRow = document.createElement("tr");
        tableRow.innerHTML = `
            <td>${cat.id}</td>
            <td><img src="${cat.url}" /></td>
            <td>${cat.height.toString()}</td>
            <td>${cat.width.toString()}</td>
            <td>${cat.url}</td>
            <td><a href="#">X</a></td>
        `;
        tableBody.appendChild(tableRow);
    }
    static deleteData(deleteButton) {
        const td = deleteButton.parentElement;
        const tr = td.parentElement;
        tr.remove();
    }
}
function getJSON(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url);
        const json = yield response.json();
        return json;
    });
}
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const json = yield getJSON(url);
            const data = json[0];
            WebDisplay.addData(data);
        }
        catch (error) {
            let message;
            if (error instanceof Error) {
                message = error.message;
            }
            else {
                message = String(error);
            }
            console.log(message);
        }
    });
}
button.addEventListener("click", getData);
tableBody.addEventListener("click", (ev) => {
    if (ev.target instanceof HTMLAnchorElement) {
        WebDisplay.deleteData(ev.target);
    }
});
