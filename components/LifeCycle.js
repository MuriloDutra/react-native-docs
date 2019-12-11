import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class LifeCycle extends Component{


                    //MONTANDO O COMPONENTE PELA PRIMEIRA VEZ

    constructor(props){
        super(props)
        // Primeira função executada no Componente.
    }

    static getDerivedStateFromProps(props, state){
        /**
         * É invocado imediatamente antes de chamar o método render, ambos na montagem inicial e nas atualizações subsequente.
         * Devem retornar um objeto para atualizar o state, ou null para não atualizar nada.
         */
    }

    render(){
        // Terceira função executada no Componente.
    }

    componentDidMount(){
        // Quarta função executada no Componente. É chamada assim que a renderização é finalizada.
    }


                    //ATUALIZANDO O COMPONENTE

    static getDerivedStateFromProps(props, state){
        /**
         * É invocado imediatamente antes de chamar o método render, ambos na montagem inicial e nas atualizações subsequente.
         * Devem retornar um objeto para atualizar o state, ou null para não atualizar nada.
         */
    }
 
    shouldComponentUpdate(nextProps, nextState){
        /* Método responsável por determinar se o componente deve realizar o render novamente ou não. 
        render() não será invocado se shouldComponentUpdate() retornar false.*/
    }

    render(){

    }

    getSnapshotBeforeUpdate(){
        /**
         * É invocado imediatamente antes que o retorno da renderização mais recente seja escrito no DOM.
         * Isto permite que o componente capture alguma informação do DOM (e.g. posição do scroll) antes que ela seja potencialmente alterada.
         * Qualquer valor retornado por este método do ciclo de vida será passado como parâmetro para componentDidUpdate().
         */
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        /*  componentDidUpdate() é invocado imediatamente após alguma atualização ocorrer. Este método não é chamado pelo initial render.
            componentDidUpdate() não será invocado se shouldComponentUpdate() retornar false.
        */
    }


                    //DESMONTANDO O COMPONENTE

    componentWillUnmount(){
        /*  Chamado antes de um componente ser desmontado, bom para cancelar EventListeners ou setIntervals que possam estar sendo executados. 
            É invocado imediatamente antes que um componente seja desmontado e destruído. Qualquer limpeza necessária deve ser realizada neste método,
            como invalidar timers, cancelar requisições de rede, ou limpar qualquer subscrição que foi criada no componentDidMount().
        */
    }


    /*              TRATANDO ERROS DO COMPONENTE
        Estes métodos são chamados quando existir um erro durante a renderização, em um método do ciclo de vida, ou no construtor de qualquer componente-filho.
        Os error boundaries somente realizam catch nos componentes abaixo dele na árvore. Um error boundary não pode realizar o catch de um erro dentro de si próprio.
    */

    static getDerivedStateFromError(error) {
        /*Este lifecycle é invocado após um erro ser lançado por um componente descendente.
        Ele recebe o erro que foi lançado como parâmetro e deve retornar um valor para atualizar o state.*/
    }

    componentDidCatch(error, info){
        /**
         *  Este lifecycle é invocado após um erro ter sido lançado por um componente descendente. Ele recebe dois parâmetros:

            error - O erro que foi lançado.
            info - Um objeto com uma chave componentStack contendo informações sobre qual componente lançou o erro.
         */
    }
}



/**
 *      MÉTODOS MAIS USADOS NO CICLO DE VIDA
 * 
 *  render()
 *  constructor(props)
 *  componentDidMount()
 *  componentDidUpdate(prevProps, prevState, snapshot)
 *  componentWillUnmount()
 * 
 *      MÉTODOS RARAMENTE USADOS NO CICLO DE VIDA
 * 
 *  shouldComponentUpdate(nextProps, nextState)
 *  static getDerivedStateFromProps(props, state)
 *  getSnapshotBeforeUpdate(prevProps, prevState)
 *  static getDerivedStateFromError(error)
 *  componentDidCatch(error, info)
 */