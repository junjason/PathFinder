class Route {
    constructor(grid, start, end) {
        this.grid = grid;
        this.start = start;
        this.end = end;
        this.visitedInOrder = [];
        this.routeFromStartToEnd = [];
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

    runBFS() {
        let queue = [];
        let visited = new Set();
        queue.push(this.start);
        this.visitedInOrder = [];

        while (queue.length !== 0) {
            let next = queue.shift();
            let nextPos = this.getPos(next);

            this.visitedInOrder.push(next);
            // visited.add(this.getPos(next).join("-"));
            if (next.dataset.status !== "end" || next.dataset.status !== "start") next.dataset.status = "visited";
            if (this.getPos(next).join("-") === this.getPos(this.end).join("-")) {
                this.animateVisited();
                return true;
            }

            if (next.dataset.portal === "portal-start") {
                let dest = document.querySelector(".portal-end");
                // destination is unvisited, add to queue
                if (dest && !visited.has(this.getPos(dest).join("-"))) {
                    dest.dataset.cookie = "cookie-portal-start";
                    queue.push(dest);
                    visited.add(this.getPos(dest).join("-"));
                } 
            } 
            else {
                // visit east
                let left = document.querySelector(`.n-${nextPos[0]}-${parseInt(nextPos[1])+1}`);
                if (left && !visited.has(this.getPos(left).join("-")) && left.dataset.status !== "wall") {
                    left.dataset.cookie = "cookie-west";
                    queue.push(left);
                    visited.add(this.getPos(left).join("-"));
                }
                
                // visit south
                let down = document.querySelector(`.n-${parseInt(nextPos[0])+1}-${nextPos[1]}`);
                if (down && !visited.has(this.getPos(down).join("-")) && down.dataset.status !== "wall") {
                    down.dataset.cookie = "cookie-north";
                    queue.push(down);
                    visited.add(this.getPos(down).join("-"));
                }

                // visit west
                let right = document.querySelector(`.n-${nextPos[0]}-${parseInt(nextPos[1])-1}`);
                if (right && !visited.has(this.getPos(right).join("-")) && right.dataset.status !== "wall") {
                    right.dataset.cookie = "cookie-east";
                    queue.push(right);
                    visited.add(this.getPos(right).join("-"));
                }

                // visit north
                let up = document.querySelector(`.n-${parseInt(nextPos[0])-1}-${nextPos[1]}`);
                if (up && !visited.has(this.getPos(up).join("-")) && up.dataset.status !== "wall") {
                    up.dataset.cookie = "cookie-south";
                    queue.push(up);
                    visited.add(this.getPos(up).join("-"));
                }
            }
        }
        this.animateVisited();
        return false;
    }

    runDFS() {
        let stack = [];
        let visited = new Set();
        this.visitedInOrder = [];
        stack.push(this.start);

        while (stack.length !== 0) {
            let next = stack.pop();
            let nextPos = this.getPos(next);

            this.visitedInOrder.push(next);
            visited.add(this.getPos(next).join("-"));
            if (next.dataset.status !== "end" || next.dataset.status !== "start") next.dataset.status = "visited";
            if (this.getPos(next).join("-") === this.getPos(this.end).join("-")) {
                this.animateVisited();
                return true;
            }

            if (next.dataset.portal === "portal-start") {
                let dest = document.querySelector(".portal-end");
                if (dest && !visited.has(this.getPos(dest).join("-"))) {
                    dest.dataset.cookie = "cookie-portal-start";
                    stack.push(dest);
                } 
            } 
            else {
                // add west
                let right = document.querySelector(`.n-${nextPos[0]}-${parseInt(nextPos[1])-1}`);
                if (right && !visited.has(this.getPos(right).join("-")) && right.dataset.status !== "wall") {
                    right.dataset.cookie = "cookie-east";
                    stack.push(right);
                }

                // add north
                let up = document.querySelector(`.n-${parseInt(nextPos[0])-1}-${nextPos[1]}`);
                if (up && !visited.has(this.getPos(up).join("-")) && up.dataset.status !== "wall") {
                    up.dataset.cookie = "cookie-south";
                    stack.push(up);
                }
                
                // add east
                let left = document.querySelector(`.n-${nextPos[0]}-${parseInt(nextPos[1])+1}`);
                if (left && !visited.has(this.getPos(left).join("-")) && left.dataset.status !== "wall") {
                    left.dataset.cookie = "cookie-west";
                    stack.push(left);
                }
                
                // add south
                let down = document.querySelector(`.n-${parseInt(nextPos[0])+1}-${nextPos[1]}`);
                if (down && !visited.has(this.getPos(down).join("-")) && down.dataset.status !== "wall") {
                    down.dataset.cookie = "cookie-north";
                    stack.push(down);
                }
            }
        }
        this.animateVisited();
        return false;
    }    

    backTrack() {
        let currentNode = this.end;
        this.routeFromStartToEnd = [];
        
        while (this.getPos(currentNode).join("-") !== this.getPos(this.start).join("-")) {
            this.routeFromStartToEnd.push(currentNode);
            let currPos = this.getPos(currentNode);

            if (currentNode.dataset.cookie === "cookie-south") {
                let down = document.querySelector(`.n-${parseInt(currPos[0])+1}-${currPos[1]}`);
                currentNode = down;
            }
            else if (currentNode.dataset.cookie === "cookie-north") {
                let up = document.querySelector(`.n-${parseInt(currPos[0])-1}-${currPos[1]}`);
                currentNode = up;
            }
            else if (currentNode.dataset.cookie === "cookie-east") {
                let right = document.querySelector(`.n-${currPos[0]}-${parseInt(currPos[1])+1}`);
                currentNode = right;
            }
            else if (currentNode.dataset.cookie === "cookie-west") {
                let left = document.querySelector(`.n-${currPos[0]}-${parseInt(currPos[1])-1}`);
                currentNode = left;
            }    
            else if (currentNode.dataset.cookie === "cookie-portal-start") {
                let prev = document.querySelector(".portal-start");
                currentNode = prev;
            }        
        }

        this.routeFromStartToEnd.push(currentNode);
        this.routeFromStartToEnd.reverse();
    }

    animateVisited() {
        for (let i = 0; i < this.visitedInOrder.length; i++) {
            // debugger;
            setTimeout(() => {
                this.visitedInOrder[i].classList.add("visited-anim"); 
            }, 15*i);

            if (i === this.visitedInOrder.length-1) {
                setTimeout(() => {this.animateBackTrack();}, 15*i);
            }
        }
    }

    animateBackTrack() {
        for (let i = 0; i < this.routeFromStartToEnd.length; i++) {
            setTimeout(() => {
                this.routeFromStartToEnd[i].classList.add("shortest-path");
            }, 25*i);
        }
    }
}

export default Route;