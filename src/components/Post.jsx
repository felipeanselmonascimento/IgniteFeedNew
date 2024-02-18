import styles from './Post.module.css'

export function Post () {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img  className={styles.avatar} src="https://i.seadn.io/gae/HX4CTZTehBUI0lG7DTTyKimP83SFYfbIVMDXWqxgWLkfMqJP-_-wOsh_7iazaBlI4uxncfSa8wgQRuathMylO0Hg7ebwgc3MEcuQJg?auto=format&dpr=1&w=1000"/>
                    <div className={styles.authorInfo}>
                        <strong>Felipe Anselmo</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title="11 de maio as 8:13h" dateTime="2022-05-11 08:13:30">Publicado há 1hora</time>
            </header>
            <div className={styles.content}>
                <p>Fala Galera</p>
                <p>Acabei de Subir mais um projeto no meu Portifa</p>
                <p><a href="#">felipe.design/doctorcare</a></p>
                <p><a href="#">#newproject #rocketseat</a></p>
            </div>
        </article>
    )
}