import React from "react";
import '../css/about.css'

export default function About() {
    const lipsum = (
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium lobortis auctor. Duis eget neque gravida tellus tempus volutpat eget ac diam. Phasellus lobortis erat velit, eget rutrum enim interdum sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi vel massa ullamcorper, dapibus justo eget, efficitur elit. Sed sit amet urna ex. Praesent feugiat dapibus sapien quis bibendum. Nunc semper est sem. Nam tincidunt porttitor molestie. Sed volutpat dapibus mi, eget vestibulum lacus maximus ac. Quisque egestas mi vitae mi finibus, ullamcorper dapibus magna pellentesque. Aliquam dictum felis urna, sit amet scelerisque ligula egestas ultrices. Suspendisse potenti. Phasellus vitae orci quam.
        <br/><br/>Pellentesque magna augue, tempus sit amet purus quis, vehicula blandit augue. Integer congue sem cursus lacus vulputate euismod. Integer rutrum lectus sem, et venenatis dui malesuada in. Vestibulum magna lorem, viverra at ipsum ut, dapibus ullamcorper mauris. Nam pulvinar at urna sit amet volutpat. Nullam tincidunt purus vitae metus egestas, eget posuere erat elementum. Mauris accumsan mauris consequat ante condimentum porttitor ac quis nisl. Proin laoreet libero massa, et eleifend dolor porttitor quis. Aenean eget laoreet massa. Praesent ultrices ornare efficitur. Fusce cursus lorem id maximus tempor.
        <br/><br/>Curabitur nec lorem lobortis, scelerisque leo eu, convallis enim. Nulla vestibulum augue nec nunc dictum, id tincidunt justo ultrices. Nam volutpat nulla tellus, nec condimentum arcu posuere vel. Aliquam quam ante, accumsan non ultrices ac, laoreet eget quam. Vivamus pellentesque venenatis nulla eget molestie. Suspendisse diam libero, interdum sed ante ac, rhoncus rutrum ipsum. Maecenas commodo dictum quam id porttitor. In hac habitasse platea dictumst. Vestibulum fermentum faucibus finibus. Curabitur porta, mi ac ullamcorper vestibulum, mauris velit porttitor arcu, vel bibendum lacus felis sit amet mauris. Nullam et purus lacus. Ut eu consectetur mauris, at gravida neque. Nullam quis posuere justo. Cras rhoncus vitae odio ac varius. Integer nec ipsum ultrices, venenatis felis rutrum, imperdiet mauris. Morbi tellus metus, luctus quis porta accumsan, sagittis in odio.
        <br/><br/>Quisque tempus semper est, id pulvinar dui commodo id. Integer imperdiet urna ac diam pulvinar, sed posuere nunc bibendum. Etiam sed augue condimentum, cursus leo accumsan, dignissim mi. Maecenas gravida viverra mauris, eu pellentesque tellus finibus sed. Nulla facilisi. Phasellus sit amet dui hendrerit, semper arcu ac, scelerisque lorem. Sed luctus tincidunt dui efficitur semper. Nulla non mattis turpis, et finibus orci.
        <br/><br/>Pellentesque faucibus a risus non blandit. Fusce convallis felis ac odio commodo, at semper quam blandit. Maecenas tincidunt scelerisque arcu vitae congue. Aliquam congue augue at rutrum convallis. In quis bibendum leo. Integer vel felis vitae ligula aliquet finibus. Nunc mauris nunc, mollis sit amet efficitur non, ornare ut nulla. Nam in est et metus efficitur suscipit a ac mauris. Fusce leo ipsum, dapibus quis velit et, mattis tristique est. Suspendisse interdum, justo at semper mollis, felis magna mattis libero, eu imperdiet turpis sem quis dolor. Integer venenatis mattis porta. Proin pharetra odio ac leo porta, nec blandit diam consectetur. Suspendisse eu purus ac arcu sagittis aliquam. Vivamus eleifend lacinia est, lobortis semper nisl consectetur at. Cras non lorem vel enim mattis suscipit sed id elit.
        </p>
    )

    return (
        <div className="about">
            <h1>About Us</h1>
            <div className="about-us-txt">{lipsum}</div>
        </div>
    )
}
