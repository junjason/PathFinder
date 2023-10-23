class Route {
    constructor(grid, start, end) {
        this.grid = grid;
        this.start = start;
        this.end = end;
        this.visitedInOrder = [];
        this.routeFromStartToEnd = [];
    }

    // finds BFS - logic only
    runBFS() {
        let queue = [];
        let visited = new Set();
        queue.push(this.start);
        this.visitedInOrder = [];

        while (queue.length !== 0) {
            let next = queue.shift();
            let nextPos = this.getPos(next);

            // visit east
            let left = document.querySelector(`.n-${nextPos[0]}-${parseInt(nextPos[1])+1}`);
            if (left && !visited.has(this.getPos(left).join("-")) && left.dataset.status !== "wall") {
                left.classList.add("cookie-west");
                this.visitedInOrder.push(left);
                queue.push(left);
                visited.add(this.getPos(left).join("-"));
                if (left.dataset.status !== "end" || left.dataset.status !== "start") left.dataset.status = "visited";
                if (this.getPos(left).join("-") === this.getPos(this.end).join("-")) {
                    this.animateVisited();
                    return true;
                }
            }
            
            // visit south
            let down = document.querySelector(`.n-${parseInt(nextPos[0])+1}-${nextPos[1]}`);
            if (down && !visited.has(this.getPos(down).join("-")) && down.dataset.status !== "wall") {
                down.classList.add("cookie-north");
                this.visitedInOrder.push(down);
                queue.push(down);
                visited.add(this.getPos(down).join("-"));
                if (down.dataset.status !== "end" || down.dataset.status !== "start") down.dataset.status = "visited";
                if (this.getPos(down).join("-") === this.getPos(this.end).join("-")) {
                    this.animateVisited();
                    return true;
                }
            }

            // visit west
            let right = document.querySelector(`.n-${nextPos[0]}-${parseInt(nextPos[1])-1}`);
            if (right && !visited.has(this.getPos(right).join("-")) && right.dataset.status !== "wall") {
                right.classList.add("cookie-east");
                this.visitedInOrder.push(right);
                queue.push(right);
                visited.add(this.getPos(right).join("-"));
                if (right.dataset.status !== "end" || right.dataset.status !== "start") right.dataset.status = "visited";
                if (this.getPos(right).join("-") === this.getPos(this.end).join("-")) {
                    this.animateVisited();
                    return true;
                }
            }

            // visit north
            let up = document.querySelector(`.n-${parseInt(nextPos[0])-1}-${nextPos[1]}`);
            if (up && !visited.has(this.getPos(up).join("-")) && up.dataset.status !== "wall") {
                up.classList.add("cookie-south");
                this.visitedInOrder.push(up);
                queue.push(up);
                visited.add(this.getPos(up).join("-"));
                if (up.dataset.status !== "end" || up.dataset.status !== "start") up.dataset.status = "visited";
                if (this.getPos(up).join("-") === this.getPos(this.end).join("-")) {
                    this.animateVisited();
                    return true;
                }
            }
        }
        this.animateVisited();
        return false;
    }

    runDFS() {
        let stack = [];
        let visited = new Set();
        stack.push(this.start);
        this.visitedInOrder = [];

        // debugger;
        while (stack.length !== 0) {
            let next = stack.pop();
            let nextPos = this.getPos(next);

            // visit east
            let left = document.querySelector(`.n-${nextPos[0]}-${parseInt(nextPos[1])+1}`);
            if (left && !visited.has(this.getPos(left).join("-")) && left.dataset.status !== "wall") {
                left.classList.add("cookie-west");
                this.visitedInOrder.push(left);
                stack.push(left);
                visited.add(this.getPos(left).join("-"));
                if (left.dataset.status !== "end" || left.dataset.status !== "start") left.dataset.status = "visited";
                if (this.getPos(left).join("-") === this.getPos(this.end).join("-")) {
                    this.animateVisited();
                    return true;
                }
            }
            
            // visit south
            let down = document.querySelector(`.n-${parseInt(nextPos[0])+1}-${nextPos[1]}`);
            if (down && !visited.has(this.getPos(down).join("-")) && down.dataset.status !== "wall") {
                down.classList.add("cookie-north");
                this.visitedInOrder.push(down);
                stack.push(down);
                visited.add(this.getPos(down).join("-"));
                if (down.dataset.status !== "end" || down.dataset.status !== "start") down.dataset.status = "visited";
                if (this.getPos(down).join("-") === this.getPos(this.end).join("-")) {
                    this.animateVisited();
                    return true;
                }
            }

            // visit west
            let right = document.querySelector(`.n-${nextPos[0]}-${parseInt(nextPos[1])-1}`);
            if (right && !visited.has(this.getPos(right).join("-")) && right.dataset.status !== "wall") {
                right.classList.add("cookie-east");
                this.visitedInOrder.push(right);
                stack.push(right);
                visited.add(this.getPos(right).join("-"));
                if (right.dataset.status !== "end" || right.dataset.status !== "start") right.dataset.status = "visited";
                if (this.getPos(right).join("-") === this.getPos(this.end).join("-")) {
                    this.animateVisited();
                    return true;
                }
            }

            // visit north
            let up = document.querySelector(`.n-${parseInt(nextPos[0])-1}-${nextPos[1]}`);
            if (up && !visited.has(this.getPos(up).join("-")) && up.dataset.status !== "wall") {
                up.classList.add("cookie-south");
                this.visitedInOrder.push(up);
                stack.push(up);
                visited.add(this.getPos(up).join("-"));
                if (up.dataset.status !== "end" || up.dataset.status !== "start") up.dataset.status = "visited";
                if (this.getPos(up).join("-") === this.getPos(this.end).join("-")) {
                    this.animateVisited();
                    return true;
                }
            }
        }
        this.animateVisited();
        return false;
    }

    getPos(node) {
        let classes = node.className;
        let classNames = classes.split(" ");
        let coordinates = classNames[0];
        let pos = coordinates.split("-");
        let x = pos[1];
        let y = pos[2];
        return [x,y];
    }

    animateVisited() {
        for (let i = 0; i < this.visitedInOrder.length; i++) {
            // debugger;
            setTimeout(() => {
                this.visitedInOrder[i].classList.add("visited-anim"); 
            }, 25*i);

            if (i === this.visitedInOrder.length-1) {
                setTimeout(() => {this.animateBackTrack();}, 25*i);
            }
        }
    }

    backTrack() {
        // start at end node + use cookies to find path from end to start
        let currentNode = this.end;
        this.routeFromStartToEnd = [];
        while (this.getPos(currentNode).join("-") !== this.getPos(this.start).join("-")) {
            // console.log("hi")
            // debugger;
            this.routeFromStartToEnd.push(currentNode);
            let currPos = this.getPos(currentNode);

            // came from south, go south
            if (currentNode.classList.contains("cookie-south")) {
                let down = document.querySelector(`.n-${parseInt(currPos[0])+1}-${currPos[1]}`);
                currentNode = down;
            }
            else if (currentNode.classList.contains("cookie-north")) {
                let up = document.querySelector(`.n-${parseInt(currPos[0])-1}-${currPos[1]}`);
                currentNode = up;
            }
            else if (currentNode.classList.contains("cookie-east")) {
                let right = document.querySelector(`.n-${currPos[0]}-${parseInt(currPos[1])+1}`);
                currentNode = right;
            }
            else if (currentNode.classList.contains("cookie-west")) {
                let left = document.querySelector(`.n-${currPos[0]}-${parseInt(currPos[1])-1}`);
                currentNode = left;
            }            
        }
        this.routeFromStartToEnd.push(currentNode);
        this.routeFromStartToEnd.reverse();
    }

    animateBackTrack() {
        for (let i = 0; i < this.routeFromStartToEnd.length; i++) {
            setTimeout(() => {
                this.routeFromStartToEnd[i].style.backgroundColor = "yellow";
            }, 25*i);
        }
    }
}

export default Route;