import {MusicServiceLogoCard} from "./MusicServiceLogoCard";

export function AmazonMusicLogoCard(props) {
    return (
        <MusicServiceLogoCard
            name="Amazon Music"
            bg="#1ED6E0"
            icon={{
                viewBox: "0 0 50 30",
                color: "#062829",
                d: "M33.233,12.638C33.57,12.413 33.739,12.02 33.739,11.571C33.739,11.234 33.683,11.009 33.458,10.785C33.233,10.56 32.896,10.391 32.335,10.167L30.649,9.549C29.189,8.987 28.459,8.032 28.459,6.74C28.459,5.898 28.796,5.168 29.47,4.662C30.144,4.157 31.043,3.876 32.11,3.876C32.952,3.876 33.795,4.044 34.637,4.325C34.806,4.381 34.918,4.437 34.974,4.55C35.031,4.662 35.087,4.774 35.087,4.943L35.087,5.505C35.087,5.729 34.974,5.842 34.806,5.842C34.75,5.842 34.581,5.785 34.357,5.729C33.683,5.505 32.952,5.392 32.222,5.392C30.93,5.392 30.312,5.842 30.312,6.684C30.312,7.077 30.425,7.302 30.649,7.527C30.818,7.751 31.267,7.976 31.885,8.201L33.458,8.819C34.244,9.099 34.806,9.493 35.143,9.886C35.48,10.335 35.649,10.841 35.649,11.515C35.649,12.47 35.312,13.2 34.581,13.762C33.851,14.323 32.952,14.604 31.773,14.604C30.649,14.604 29.638,14.436 28.74,14.042C28.571,13.986 28.459,13.874 28.403,13.818C28.346,13.705 28.29,13.593 28.29,13.425L28.29,12.863C28.29,12.638 28.346,12.526 28.515,12.526C28.627,12.526 28.796,12.582 29.02,12.638C29.919,12.919 30.818,13.031 31.773,13.031C32.391,13.031 32.896,12.863 33.233,12.638ZM24.415,4.55C24.415,4.325 24.527,4.157 24.864,4.157L26.044,4.157C26.324,4.157 26.437,4.269 26.437,4.55L26.437,13.818C26.437,14.099 26.324,14.211 26.044,14.211L25.201,14.211C25.032,14.211 24.92,14.211 24.864,14.155C24.752,14.099 24.695,14.042 24.695,13.874L24.583,13.2C23.347,14.099 22.055,14.548 20.764,14.548C19.809,14.548 19.078,14.267 18.573,13.762C18.067,13.256 17.843,12.47 17.843,11.515L17.843,4.55C17.843,4.269 17.955,4.157 18.236,4.157L19.415,4.157C19.696,4.157 19.809,4.269 19.809,4.55L19.809,10.897C19.809,11.627 19.921,12.133 20.202,12.47C20.483,12.807 20.932,12.975 21.55,12.975C22.505,12.975 23.46,12.638 24.415,12.02L24.415,4.55ZM13.742,14.267C13.461,14.267 13.349,14.155 13.349,13.874L13.349,7.414C13.349,6.74 13.181,6.291 12.956,5.954C12.731,5.617 12.338,5.448 11.776,5.448C10.822,5.448 9.867,5.729 8.856,6.347L8.856,13.874C8.856,14.155 8.743,14.267 8.462,14.267L7.283,14.267C7.002,14.267 6.89,14.155 6.89,13.874L6.89,7.414C6.89,6.74 6.721,6.291 6.496,5.954C6.272,5.617 5.879,5.448 5.317,5.448C4.306,5.448 3.351,5.785 2.396,6.347L2.396,13.93C2.396,14.211 2.284,14.323 2.003,14.323L0.823,14.323C0.542,14.323 0.43,14.211 0.43,13.93L0.43,4.606C0.43,4.325 0.542,4.213 0.823,4.213L1.722,4.213C1.834,4.213 1.947,4.213 2.003,4.269C2.115,4.325 2.171,4.381 2.171,4.55L2.284,5.168C3.519,4.325 4.755,3.876 5.991,3.876C7.227,3.876 8.069,4.325 8.519,5.28C9.81,4.325 11.159,3.876 12.45,3.876C13.405,3.876 14.079,4.157 14.585,4.662C15.09,5.168 15.315,5.898 15.315,6.853L15.315,13.874C15.315,14.155 15.203,14.267 14.922,14.267L13.742,14.267ZM44.355,21.738C45.31,21.344 46.096,22.356 45.141,23.03C39.693,27.074 31.773,29.208 24.92,29.208C15.371,29.208 6.721,25.67 0.205,19.772C-0.188,19.379 0.037,18.929 0.43,18.929C0.542,18.929 0.655,18.985 0.767,19.042C7.788,23.142 16.495,25.613 25.482,25.613C31.548,25.613 38.232,24.321 44.355,21.738ZM44.186,6.403C43.681,6.965 43.456,7.864 43.4,9.099L43.4,9.38C43.4,10.56 43.625,11.459 44.13,12.02C44.636,12.582 45.422,12.863 46.489,12.863C47.051,12.863 47.669,12.751 48.287,12.582C48.399,12.526 48.511,12.526 48.568,12.526C48.736,12.526 48.848,12.638 48.848,12.919L48.848,13.481C48.848,13.649 48.848,13.818 48.792,13.874C48.736,13.986 48.624,14.042 48.455,14.099C47.837,14.379 47.051,14.492 46.208,14.492C44.636,14.492 43.456,14.042 42.614,13.144C41.771,12.245 41.378,10.953 41.378,9.268C41.378,7.583 41.827,6.235 42.67,5.336C43.568,4.381 44.748,3.932 46.321,3.932C46.995,3.932 47.725,4.1 48.455,4.269C48.568,4.325 48.68,4.437 48.736,4.494C48.792,4.55 48.848,4.718 48.848,4.887L48.848,5.448C48.848,5.729 48.736,5.842 48.568,5.842C48.455,5.842 48.399,5.842 48.231,5.785C47.725,5.617 47.163,5.561 46.602,5.561C45.478,5.561 44.692,5.842 44.186,6.403ZM46.714,27.018C46.208,27.355 45.815,27.186 45.984,26.681C46.658,25.052 48.118,21.344 47.444,20.446C46.714,19.547 42.782,19.996 41.041,20.221C40.535,20.277 40.423,19.828 40.928,19.491C42.557,18.367 44.692,17.974 46.489,17.974C48.174,17.974 49.522,18.311 49.803,18.648C50.421,19.435 49.635,24.546 46.714,27.018ZM38.906,4.157C39.187,4.157 39.3,4.325 39.3,4.55L39.3,13.874C39.3,14.155 39.187,14.267 38.906,14.267L37.727,14.267C37.446,14.267 37.334,14.155 37.334,13.874L37.334,4.55C37.334,4.269 37.446,4.157 37.727,4.157L38.906,4.157ZM39.243,0.337C39.468,0.506 39.524,0.843 39.524,1.18C39.524,1.517 39.412,1.797 39.187,2.022C38.963,2.247 38.682,2.359 38.288,2.359C37.895,2.359 37.614,2.247 37.39,2.022C37.165,1.854 37.053,1.517 37.053,1.18C37.053,0.843 37.165,0.562 37.39,0.337C37.614,0.112 37.895,0 38.288,0C38.682,0 39.019,0.112 39.243,0.337Z",
                maxW: "40%"
            }}
            nameMargin={props.nameMargin}
            maxW={props.maxW}
            link={props.link}
        />
    )
}