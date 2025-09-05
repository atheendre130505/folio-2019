import * as THREE from 'three'
import Project from './Project'
import gsap from 'gsap'

export default class ProjectsSection
{
    constructor(_options)
    {
        // Options
        this.time = _options.time
        this.resources = _options.resources
        this.camera = _options.camera
        this.passes = _options.passes
        this.objects = _options.objects
        this.areas = _options.areas
        this.zones = _options.zones
        this.tiles = _options.tiles
        this.debug = _options.debug
        this.x = _options.x
        this.y = _options.y

        // Debug
        if(this.debug)
        {
            this.debugFolder = this.debug.addFolder('projects')
            this.debugFolder.open()
        }

        // Set up
        this.items = []

        this.interDistance = 24
        this.positionRandomess = 5
        this.projectHalfWidth = 9

        this.container = new THREE.Object3D()
        this.container.matrixAutoUpdate = false
        this.container.updateMatrix()

        this.setGeometries()
        this.setMeshes()
        this.setList()
        this.setZone()

        // Add all project from the list
        for(const _options of this.list)
        {
            this.add(_options)
        }
    }

    setGeometries()
    {
        this.geometries = {}
        this.geometries.floor = new THREE.PlaneGeometry(16, 8)
    }

    setMeshes()
    {
        this.meshes = {}

        // this.meshes.boardStructure = this.objects.getConvertedMesh(this.resources.items.projectsBoardStructure.scene.children, { floorShadowTexture: this.resources.items.projectsBoardStructureFloorShadowTexture })
        this.resources.items.areaOpenTexture.magFilter = THREE.NearestFilter
        this.resources.items.areaOpenTexture.minFilter = THREE.LinearFilter
        this.meshes.boardPlane = this.resources.items.projectsBoardPlane.scene.children[0]
        this.meshes.areaLabel = new THREE.Mesh(new THREE.PlaneGeometry(2, 0.5), new THREE.MeshBasicMaterial({ transparent: true, depthWrite: false, color: 0xffffff, alphaMap: this.resources.items.areaOpenTexture }))
        this.meshes.areaLabel.matrixAutoUpdate = false
    }

    setList()
    {
        this.list = [
            {
                name: 'AI-Powered Loan Eligibility Engine',
                imageSources:
                [
                    './models/projects/aiLoanEngine/slideA.jpg',
                    './models/projects/aiLoanEngine/slideB.jpg',
                    './models/projects/aiLoanEngine/slideC.jpg',
                    './models/projects/aiLoanEngine/slideD.jpg'
                ],
                floorTexture: this.resources.items.projectsAiLoanEngineFloor,
                link:
                {
                    href: 'https://github.com/atheendre130505/ai-loan-eligibility-engine',
                    x: - 4.8,
                    y: - 3,
                    halfExtents:
                    {
                        x: 3.2,
                        y: 1.5
                    }
                },
                distinctions:
                [
                    { type: 'fwa', x: 3.95, y: 4.15 }
                ]
            },
            {
                name: 'Autonomous AI Development CLI',
                imageSources:
                [
                    './models/projects/autocoder/slideA.jpg',
                    './models/projects/autocoder/slideB.jpg',
                    './models/projects/autocoder/slideC.jpg'
                ],
                floorTexture: this.resources.items.projectsAutocoderFloor,
                link:
                {
                    href: 'https://github.com/atheendre130505/crazy.coder',
                    x: - 4.8,
                    y: - 3.3,
                    halfExtents:
                    {
                        x: 3.2,
                        y: 1.5
                    }
                },
                distinctions:
                [
                    { type: 'awwwards', x: 3.95, y: 4.15 },
                    { type: 'fwa', x: 5.6, y: 4.15 },
                    { type: 'cssda', x: 7.2, y: 4.15 }
                ]
            },
            {
                name: 'Dueling Double DQN Dinojump',
                imageSources:
                [
                    './models/projects/dqnDinojump/slideA.jpg',
                    './models/projects/dqnDinojump/slideB.jpg',
                    './models/projects/dqnDinojump/slideC.jpg',
                    './models/projects/dqnDinojump/slideD.jpg'
                ],
                floorTexture: this.resources.items.projectsDqnDinojumpFloor,
                link:
                {
                    href: 'https://github.com/atheendre130505/dueling_double_DQN_dinojump',
                    x: - 4.8,
                    y: - 2,
                    halfExtents:
                    {
                        x: 3.2,
                        y: 1.5
                    }
                },
                distinctions:
                [
                    { type: 'awwwards', x: 3.95, y: 4.15 },
                    { type: 'fwa', x: 5.6, y: 4.15 },
                ]
            },
            {
                name: 'Kaggle Introvert-Extrovert (97.5%)',
                imageSources:
                [
                    './models/projects/kagglePersonality/slideA.jpg',
                    './models/projects/kagglePersonality/slideB.jpg',
                    './models/projects/kagglePersonality/slideC.jpg',
                    './models/projects/kagglePersonality/slideD.jpg'
                ],
                floorTexture: this.resources.items.projectsKagglePersonalityFloor,
                link:
                {
                    href: 'https://github.com/atheendre130505/Kaggle_introvert-extrovert',
                    x: - 4.8,
                    y: - 3,
                    halfExtents:
                    {
                        x: 3.2,
                        y: 1.5
                    }
                },
                distinctions:
                [
                    { type: 'awwwards', x: 3.95, y: 4.15 },
                    { type: 'fwa', x: 5.6, y: 4.15 },
                ]
            },
            {
                name: 'GANs Monet - Style Transfer',
                imageSources:
                [
                    './models/projects/gansMonet/slideA.jpg',
                    './models/projects/gansMonet/slideB.jpg',
                    './models/projects/gansMonet/slideC.jpg'
                ],
                floorTexture: this.resources.items.projectsGansMonetFloor,
                link:
                {
                    href: 'https://github.com/atheendre130505/gans_monet',
                    x: - 4.8,
                    y: - 4,
                    halfExtents:
                    {
                        x: 3.2,
                        y: 1.5
                    }
                },
                distinctions:
                [
                    { type: 'awwwards', x: 3.95, y: 4.15 },
                    { type: 'fwa', x: 5.6, y: 4.15 }
                ]
            },
            {
                name: 'Billions - Freelance Project',
                imageSources:
                [
                    './models/projects/billions/slideA.jpg',
                    './models/projects/billions/slideB.jpg',
                    './models/projects/billions/slideC.jpg'
                ],
                floorTexture: this.resources.items.projectsBillionsFloor,
                link:
                {
                    href: 'https://github.com/atheendre130505/billions',
                    x: - 4.8,
                    y: - 2,
                    halfExtents:
                    {
                        x: 3.2,
                        y: 1.5
                    }
                },
                distinctions:
                [
                ]
            },
            {
                name: 'Hinton-Hopfield Networks Research',
                imageSources:
                [
                    './models/projects/hintonHopfield/slideA.jpg',
                    './models/projects/hintonHopfield/slideB.jpg',
                    './models/projects/hintonHopfield/slideC.jpg'
                ],
                floorTexture: this.resources.items.projectsHintonHopfieldFloor,
                link:
                {
                    href: 'https://github.com/atheendre130505',
                    x: - 4.8,
                    y: - 3,
                    halfExtents:
                    {
                        x: 3.2,
                        y: 1.5
                    }
                },
                distinctions:
                [
                    { type: 'awwwards', x: 3.95, y: 4.15 },
                    { type: 'fwa', x: 5.6, y: 4.15 },
                    { type: 'cssda', x: 7.2, y: 4.15 }
                ]
            },
            {
                name: 'IIT Tirupati Research',
                imageSources:
                [
                    './models/projects/iitResearch/slideA.jpg',
                    './models/projects/iitResearch/slideB.jpg',
                    './models/projects/iitResearch/slideC.jpg'
                ],
                floorTexture: this.resources.items.projectsIitResearchFloor,
                link:
                {
                    href: 'https://github.com/atheendre130505',
                    x: - 4.8,
                    y: - 3.4,
                    halfExtents:
                    {
                        x: 3.2,
                        y: 1.5
                    }
                },
                distinctions:
                [
                    { type: 'awwwards', x: 3.95, y: 4.15 },
                    { type: 'fwa', x: 5.6, y: 4.15 },
                    { type: 'cssda', x: 7.2, y: 4.15 }
                ]
            },
            {
                name: 'Salesforce Internship',
                imageSources:
                [
                    './models/projects/salesforce/slideA.jpg',
                    './models/projects/salesforce/slideB.jpg',
                    './models/projects/salesforce/slideC.jpg'
                ],
                floorTexture: this.resources.items.projectsSalesforceFloor,
                link:
                {
                    href: 'https://github.com/atheendre130505',
                    x: - 4.8,
                    y: - 4.4,
                    halfExtents:
                    {
                        x: 3.2,
                        y: 1.5
                    }
                },
                distinctions:
                [
                    { type: 'awwwards', x: 3.95, y: 4.15 },
                    { type: 'fwa', x: 5.6, y: 4.15 },
                    { type: 'cssda', x: 7.2, y: 4.15 }
                ]
            },
            // {
            //     name: 'gleecChat',
            //     imageSources:
            //     [
            //         './models/projects/gleecChat/slideA.jpg',
            //         './models/projects/gleecChat/slideB.jpg',
            //         './models/projects/gleecChat/slideC.jpg',
            //         './models/projects/gleecChat/slideD.jpg'
            //     ],
            //     floorTexture: this.resources.items.projectsGleecChatFloorTexture,
            //     link:
            //     {
            //         href: 'http://gleec.imm-g-prod.com',
            //         x: - 4.8,
            //         y: - 3.4,
            //         halfExtents:
            //         {
            //             x: 3.2,
            //             y: 1.5
            //         }
            //     },
            //     distinctions:
            //     [
            //         { type: 'awwwards', x: 3.95, y: 4.15 },
            //         { type: 'fwa', x: 5.6, y: 4.15 },
            //         { type: 'cssda', x: 7.2, y: 4.15 }
            //     ]
            // },
            // {
            //     name: 'keppler',
            //     imageSources:
            //     [
            //         './models/projects/keppler/slideA.jpg',
            //         './models/projects/keppler/slideB.jpg',
            //         './models/projects/keppler/slideC.jpg'
            //     ],
            //     floorTexture: this.resources.items.projectsKepplerFloorTexture,
            //     link:
            //     {
            //         href: 'https://github.com/atheendre130505/',
            //         x: 2.75,
            //         y: - 1.1,
            //         halfExtents:
            //         {
            //             x: 3.2,
            //             y: 1.5
            //         }
            //     },
            //     distinctions: []
            // }
        ]
    }

    setZone()
    {
        const totalWidth = this.list.length * (this.interDistance / 2)

        const zone = this.zones.add({
            position: { x: this.x + totalWidth - this.projectHalfWidth - 6, y: this.y },
            halfExtents: { x: totalWidth, y: 12 },
            data: { cameraAngle: 'projects' }
        })

        zone.on('in', (_data) =>
        {
            this.camera.angle.set(_data.cameraAngle)
            gsap.to(this.passes.horizontalBlurPass.material.uniforms.uStrength.value, { x: 0, duration: 2 })
            gsap.to(this.passes.verticalBlurPass.material.uniforms.uStrength.value, { y: 0, duration: 2 })
        })

        zone.on('out', () =>
        {
            this.camera.angle.set('default')
            gsap.to(this.passes.horizontalBlurPass.material.uniforms.uStrength.value, { x: this.passes.horizontalBlurPass.strength, duration: 2 })
            gsap.to(this.passes.verticalBlurPass.material.uniforms.uStrength.value, { y: this.passes.verticalBlurPass.strength, duration: 2 })
        })
    }

    add(_options)
    {
        const x = this.x + this.items.length * this.interDistance
        let y = this.y
        if(this.items.length > 0)
        {
            y += (Math.random() - 0.5) * this.positionRandomess
        }

        // Create project
        const project = new Project({
            time: this.time,
            resources: this.resources,
            objects: this.objects,
            areas: this.areas,
            geometries: this.geometries,
            meshes: this.meshes,
            debug: this.debugFolder,
            x: x,
            y: y,
            ..._options
        })

        this.container.add(project.container)

        // Add tiles
        if(this.items.length >= 1)
        {
            const previousProject = this.items[this.items.length - 1]
            const start = new THREE.Vector2(previousProject.x + this.projectHalfWidth, previousProject.y)
            const end = new THREE.Vector2(project.x - this.projectHalfWidth, project.y)
            const delta = end.clone().sub(start)
            this.tiles.add({
                start: start,
                delta: delta
            })
        }

        // Save
        this.items.push(project)
    }
}
