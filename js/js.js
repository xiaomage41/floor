window.onload=function(){
		//轮播图
		let banner=document.querySelector(".banner")
		let img=banner.querySelectorAll(".banner img")
		let yuan=banner.querySelectorAll(".banner_yuan")
		let num=0
		let t =setInterval(move,2000);

		function move(){
			num++;
			if(num==img.length){
				num=0
			}
			for(let i=0;i<img.length;i++){
				img[i].style.zIndex=5
			}
			img[num].style.zIndex=10
		}

		//顶部
		let header=document.querySelector(".header")
		let floor=document.querySelectorAll(".container_top")
		let s=document.querySelectorAll(".huayu_nei")
		let a=document.querySelectorAll(".title a")
		console.log(a)
		let wh=innerHeight;
		window.onscroll=function () {
		let st=document.body.scrollTop||document.documentElement.scrollTop;		
		if(st>79){
			for(let i=1;i<a.length;i++){


			header.style.background='rgba(255,255,255,1)'
			a[i].style.color="#000"}
		}else{
			for(let i=1;i<a.length;i++){
			header.style.background='rgba(0,0,0,0.1)'
			a[i].style.color="#fff"}
		}
		let b=setTimeout(move,1000)
		function move(){
			s.forEach(function(element,index){
				if(wh+st>element.offsetTop){
					if(index%2==0){
						element.style.transform='translateX('+ (-40)+'px)'
					}else if(index%2!=0){
						element.style.transform='translateX('+40+'px)'
					}else{
						element.style.transform=0;
					}
				}
			})
		}



	}












}