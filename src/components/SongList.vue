<template>
    <div v-if="!isPlayerVisible">
        <div class="text-green-300 font-bold text-center text-3xl mb-7 mt-3">
            My Music Player
        </div>
        <div class="text-green-300 font-bold text-center text-1xl mb-7 mt-3">
           (Enjoy Your Favourite Songs)
        </div>
        <div
            v-for="(song, songIndex) in list" v-bind:key="song.id"
            class="flex flex-row justify-between mb-4 cursor-pointer"
            v-on:click="playSong(songIndex)"
        >
            <div>
                <span class="text-green-200">{{ song.name }}</span>
                <br />
                <span class="text-gray-200 text-xs">
                    {{ song.artistName }} - 
                    <span class="text-gray-400"> {{ song.albumName }} ({{ song.year }})</span>
                </span>
            </div>
            <div>
                <img
                    class="max-h-12 rounded"
                    v-bind:src="song.src"
                />
            </div>
        </div>
    </div>
    <div v-if="isPlayerVisible">
        <SongPlayer
            v-bind:song="list[currentSongIndex]"
            @goback="isPlayerVisible = !isPlayerVisible"
            @next="playNext"
            @previous="playPrevious"
        />
    </div>
</template>

<script>
import SongPlayer from './SongPlayer.vue';
export default {
    data () {
        return {
            isPlayerVisible: false,
            currentSongIndex: 0,
            list: [
                {
                    id: 1,
                    name: 'Raja Rani',
                    artistName: 'Arya Nazriya',
                    albumName: 'BGM',
                    year: 2013,
                    src: `https://github.com/dharshank100/musicplayer/raw/main/thumb.jpg`,
                    songSrc: `https://github.com/dharshank100/musicplayer/raw/main/Raja%20Rani%20Telugu%20Bgm.mp3`
                },
                {
                    id: 2,
                    name: '3',
                    artistName: 'Dhanush Shruthi',
                    albumName: 'BGM',
                    year: 2012,
                    src: `https://github.com/dharshank100/musicplayer/raw/main/75da7464f4c5e77789e03c7fbe5c2a8f.jpg`,
                    songSrc: `https://github.com/dharshank100/musicplayer/raw/main/Tamil%20Song%20Love%20Bgm%20-%203%20movie.mp3`
                },
                {
                    id: 3,
                    name: 'Unakum Enakum',
                    artistName: 'Ravi Thrisha',
                    albumName: 'BGM',
                    year: 2006,
                    src: `https://github.com/dharshank100/musicplayer/raw/main/unakum-enakum-something-something.jpg`,
                    songSrc: `https://github.com/dharshank100/musicplayer/raw/main/Something%20Something%20BGM%20!%20Un%20Paarvaiyil%20!%20-%20Tamil%20bgm%20-%20sound.mp3`
                },
                 {
                    id: 4,
                    name: 'Minale',
                    artistName: 'Madhavan Rema',
                    albumName: 'BGM',
                    year: 2001,
                    src: `https://github.com/dharshank100/musicplayer/raw/main/Madhavan_recalls_the_release_of_Minnale_remake_in_Bollywood_on_its_19th_year_.jpg`,
                    songSrc: `https://github.com/dharshank100/musicplayer/raw/main/Minnale.mp3`
                },
                 {
                    id: 5,
                    name: 'Alaipayuthy',
                    artistName: 'Madhavan Shalini',
                    albumName: 'BGM',
                    year: 2000,
                    src: `https://github.com/dharshank100/musicplayer/raw/main/download%20(11).jpg`,
                    songSrc: `https://github.com/dharshank100/musicplayer/raw/main/Alaipayuthey%20-%20Theme%20Bgm.mp3`
                },
                 {
                    id: 6,
                    name: 'Kovil',
                    artistName: 'Simbu Sonia',
                    albumName: 'BGM',
                    year: 2004,
                    src: `https://github.com/dharshank100/musicplayer/raw/main/maxresdefault%20(10).jpg`,
                    songSrc: `https://github.com/dharshank100/musicplayer/raw/main/Veppam%20Kolathu%20Kiliye%20Song%20-%20Kovil.mp3`
                },
                 {
                    id: 7,
                    name: 'Sachin Shalini',
                    artistName: 'Vijay Genelia',
                    albumName: 'BGM',
                    year: 2005,
                    src: `https://github.com/dharshank100/musicplayer/raw/main/0f94a0eb04dd97eb6ee4378af73a4999.jpg`,
                    songSrc: `https://github.com/dharshank100/musicplayer/raw/main/Sachin%20-%20Love%20Bgm.mp3`
                },
                 {
                    id: 8,
                    name: '7G',
                    artistName: 'U1 Sonia',
                    albumName: 'BGM',
                    year: 2004,
                    src: `https://github.com/dharshank100/musicplayer/raw/main/2211633.jpg`,
                    songSrc: `https://github.com/dharshank100/musicplayer/raw/main/7g%20Rain%20Bow%20Colony.mp3`
                },
                {
                    id: 9,
                    name: 'Manmadhan',
                    artistName: 'Simbu U1',
                    albumName: 'BGM',
                    year: 2004,
                    src: `https://github.com/dharshank100/musicplayer/raw/main/download%20(10).jpg`,
                    songSrc: `https://github.com/dharshank100/musicplayer/raw/main/Manmadhan%20Love%20Failure%20Bgm.mp3`
                }
            ]
        }
    },
    methods: {
        playSong (index) {
            this.currentSongIndex = index;
            this.isPlayerVisible = true;
        },
        playNext () {
            if (this.currentSongIndex < this.list.length - 1) {
                this.currentSongIndex += 1;
            } else {
                this.currentSongIndex = 0;
            }
        },
        playPrevious () {
            if (this.currentSongIndex != 0) {
                this.currentSongIndex -= 1;
            } else {
                this.currentSongIndex = this.list.length - 1;
            }
        } 
    },
    components: {
        SongPlayer
    },
    name: 'SongList'
}
</script>