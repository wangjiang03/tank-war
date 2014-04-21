function TankContainer() {
	this.tanks = [];
	this.checkWhichTank = function(coordinate) {
		var tanksLength = this.tanks.length;
		for (var i=0; i<tanksLength; i++) {
			var tank = this.tanks[i];
			var tankArr = tank.getDataArr();
			for (var j=0; j<tankArr.length; j++) {
				console.log(coordinate)
				if (checkEqual(coordinate, tankArr[j])) {
					this.tanks.splice(i,1);
					return tank;
				}
			}
		}
		return null;
	}
}